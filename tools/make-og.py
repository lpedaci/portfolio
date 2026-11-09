"""Genera las tarjetas de vista previa (Open Graph), 1200 x 630, con la estética del sitio:
  - assets/img/og-image.jpg            la de la home, como el hero: fondo blanco cálido con grilla que se desvanece,
                                       brillo pastel y cuadrados; etiqueta, título en dos líneas y reparto de proyectos
  - assets/img/og/<slug>.jpg           una por caso: categoría, título y año a la izquierda; la portada del proyecto
                                       (cover en projects.js, en assets/img/covers) a la derecha

El aura de fondo toma el color de la categoría del proyecto. Las fuentes son las del sitio.
Los textos salen de assets/js/i18n.js y assets/js/projects.js: al cambiar un título o una portada alcanza con volver a correr esto.

Uso: python tools/make-og.py [home]   (home: solo la de la portada; después: node tools/bump-version.mjs)
Requiere: pip install pillow fonttools brotli
"""
import io
import json
import os
import re
import subprocess
from itertools import combinations

from fontTools.ttLib import TTFont
from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
W, H = 1200, 630
BG = (247, 245, 240)     # --bg
TEXT = (23, 24, 28)      # --text
MUTED = (95, 96, 104)    # --muted
LINE = (207, 202, 192)   # --line-2
CAT_TXT = {"it": (10, 122, 110), "cap": (184, 50, 111), "cont": (143, 91, 0)}   # --it, --cap, --cont (texto, AA)
CAT = {"it": (53, 194, 177), "cap": (236, 127, 176), "cont": (232, 184, 90)}   # versiones "bright" (auras y marca)
CAT_LABEL = {"it": "it", "cap": "capacitación", "cont": "contenido"}
HOME_KICKER = "experience designer | ux/ui | producto"
HOME_BG = (251, 248, 243)   # --bg actual (blanco cálido)
HOME_KICKER_UP = "EXPERIENCE DESIGNER · UX/UI · PRODUCTO"
URL = "lpedaci.github.io/portfolio"
X = 72                   # margen izquierdo
TEXT_MAX = 520           # ancho del bloque de texto (a la derecha va la imagen)
TITLE_TOP, TITLE_H = 200, 300  # bloque vertical del título
TRACK = -0.03            # letter-spacing del título, como .hero__title en el sitio (em)


def font(name, size, weight=None):
    """Carga una woff2 del sitio como TrueType en memoria (y fija el peso si es variable)."""
    t = TTFont(os.path.join(ROOT, "assets", "fonts", f"{name}.woff2"))
    t.flavor = None
    buf = io.BytesIO()
    t.save(buf)
    buf.seek(0)
    f = ImageFont.truetype(buf, size)
    if weight is not None:
        f.set_variation_by_axes([weight])
    return f


# Un título es una lista de palabras; cada palabra, una lista de tramos (texto, color).
# Así "claras," puede llevar "claras" en turquesa y la coma en tinta, como en el hero.
def word_text(word):
    return "".join(t for t, _ in word)


def width(draw, text, f):
    """Ancho de un texto del título con el tracking aplicado."""
    return draw.textlength(text, font=f) + TRACK * f.size * max(len(text) - 1, 0)


def line_text(words):
    return " ".join(word_text(w) for w in words)


def draw_line(draw, xy, words, f):
    x, y = xy
    runs = []
    for i, w in enumerate(words):
        if i:
            runs.append((" ", TEXT))
        runs.extend(w)
    chars = [(ch, color) for text, color in runs for ch in text]
    for i, (ch, color) in enumerate(chars):
        draw.text((x, y), ch, font=f, fill=color)
        if i + 1 < len(chars):
            nxt = chars[i + 1][0]
            # avance real del par (respeta el kerning) más el tracking
            x += draw.textlength(ch + nxt, font=f) - draw.textlength(nxt, font=f) + TRACK * f.size


def balance(draw, words, f, max_w, max_lines=3):
    """Corte de líneas parejo: entre todas las formas de repartir las palabras en la menor cantidad
    de líneas que entran en max_w, elige la de anchos más parecidos (sin una palabra corta sola)."""
    best = None
    for k in range(1, max_lines + 1):
        for cuts in combinations(range(1, len(words)), k - 1):
            bounds = (0, *cuts, len(words))
            lines = [words[a:b] for a, b in zip(bounds, bounds[1:])]
            widths = [width(draw, line_text(l), f) for l in lines]
            if max(widths) > max_w:
                continue
            if k > 1 and any(len(line_text(l)) <= 3 for l in lines):  # nada de "de", "y" o "IT" solos
                continue
            score = max(widths) - min(widths)
            if best is None or score < best[0]:
                best = (score, lines)
        if best:
            return best[1]
    return None  # no hay un corte prolijo con este tamaño


def plain_words(text, color=TEXT):
    return [[(w, color)] for w in text.split()]


def headline_lines(html):
    """El título del hero viene en líneas (<span class="l">): devuelve una lista de líneas, cada una en palabras."""
    parts = re.findall(r'<span class="l">(.*?)</span>', html) or [html]
    return [headline_words(p) for p in parts]


def headline_words(html):
    """'Diseño experiencias <em>claras</em>, ...' -> palabras con el tramo <em> en turquesa."""
    html = re.sub(r"</?span[^>]*>", "", html)
    words, glue = [], False
    for part in re.split(r"(<em>.*?</em>)", html):
        if not part:
            continue
        color = CAT_TXT["it"] if part.startswith("<em>") else TEXT
        text = re.sub(r"</?em>", "", part)
        for i, w in enumerate(text.split(" ")):
            if w == "":
                glue = False
                continue
            if glue and i == 0 and words:
                words[-1].append((w, color))  # pegado a la palabra anterior (por ejemplo la coma)
            else:
                words.append([(w, color)])
        glue = not text.endswith(" ")
    return words


def aura(spots):
    """Fondo papel con manchas de color difusas, como las auras del sitio. spots: [(x, y, radio, color, opacidad)]."""
    im = Image.new("RGB", (W, H), BG)
    for x, y, r, color, a in spots:
        blob = Image.new("L", (W, H), 0)
        ImageDraw.Draw(blob).ellipse((x - r, y - r, x + r, y + r), fill=int(255 * a))
        im.paste(Image.new("RGB", (W, H), color), (0, 0), blob.filter(ImageFilter.GaussianBlur(r * 0.55)))
    return im


def brand(im, y):
    """Marca del sitio (tres círculos superpuestos) + "Porfolio | Lourdes Pedaci"."""
    for i, c in enumerate([CAT["it"], CAT["cap"], CAT["cont"]]):
        dot = Image.new("RGBA", (34, 34), (0, 0, 0, 0))
        ImageDraw.Draw(dot).ellipse((0, 0, 33, 33), fill=(*c, 235))
        im.paste(dot, (X + i * 11, y), dot)
    d = ImageDraw.Draw(im)
    f = font("schibsted-grotesk-latin", 30)
    d.text((X + 70, y + 1), "Porfolio", font=f, fill=TEXT)
    x2 = X + 70 + d.textlength("Porfolio", font=f) + 16
    d.line((x2, y + 4, x2, y + 32), fill=LINE, width=2)
    d.text((x2 + 16, y + 3), "Lourdes Pedaci", font=font("hanken-grotesk-latin", 28, 400), fill=MUTED)


def framed(path, w, h, radius=22):
    """Portada recortada a w x h (desde arriba), con esquinas redondeadas y un borde blanco fino."""
    img = Image.open(path).convert("RGB")
    r = max(w / img.width, h / img.height)
    img = img.resize((round(img.width * r), round(img.height * r)), Image.LANCZOS)
    x = (img.width - w) // 2
    img = img.crop((x, 0, x + w, h))
    mask = Image.new("L", (w, h), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, w - 1, h - 1), radius, fill=255)
    out = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    out.paste(img, (0, 0), mask)
    ImageDraw.Draw(out).rounded_rectangle((0, 0, w - 1, h - 1), radius, outline=(255, 255, 255, 210), width=3)
    return out


def drop(im, piece, xy, angle=0, shadow=70):
    """Pega una pieza (RGBA) con rotación y una sombra suave debajo."""
    if angle:
        piece = piece.rotate(angle, resample=Image.BICUBIC, expand=True)
    sh = Image.new("L", (W, H), 0)
    sh.paste(piece.split()[3].point(lambda v: v * shadow // 255), (xy[0] + 10, xy[1] + 26))
    im.paste(Image.new("RGB", (W, H), (60, 52, 40)), (0, 0), sh.filter(ImageFilter.GaussianBlur(26)))
    im.paste(piece, xy, piece)


def title_block(d, title, max_lines=4):
    """El título más grande que entre en el bloque (hasta max_lines líneas y TITLE_H de alto), centrado en él."""
    for size in range(76, 39, -2):
        f = font("schibsted-grotesk-latin", size)
        lh = round(size * 1.08)
        lines = balance(d, title, f, TEXT_MAX, max_lines)
        if lines and len(lines) * lh <= TITLE_H:
            break
    top = TITLE_TOP + (TITLE_H - len(lines) * lh) // 2 - round(size * 0.08)
    for i, line in enumerate(lines):
        draw_line(d, (X, top + i * lh), line, f)
    return size, len(lines)


def fit_kicker(d, text, f):
    """Recorta la lista "a | b | c" hasta que entre en el ancho del bloque de texto."""
    while d.textlength(text, font=f) > TEXT_MAX and " | " in text:
        text = text.rsplit(" | ", 1)[0]
    return text


def save(im, out_path, info):
    im.save(out_path, "JPEG", quality=86, optimize=True, progressive=True)
    print(f"{os.path.relpath(out_path, ROOT)}  {info}")


def render_case(p, out_path):
    cat = p["cat"]
    second = (p.get("also") or [cat])[0]
    im = aura([(1080, 40, 420, CAT[cat], 0.55), (180, 620, 300, CAT[second], 0.22)])
    brand(im, 64)
    d = ImageDraw.Draw(im)
    labels = [CAT_LABEL[cat]] + [p.get("alsoTags", {}).get(c, {}).get("es", CAT_LABEL[c]) for c in p.get("also", [])] + p["tags"]["es"]
    kf = font("jetbrains-mono-latin", 22, 500)
    d.text((X, 150), fit_kicker(d, " | ".join(dict.fromkeys(labels)), kf), font=kf, fill=CAT_TXT[cat])
    size, n = title_block(d, plain_words(p["title"]["es"]))
    d.text((X, 540), f"{URL}  |  {p['year']}", font=font("jetbrains-mono-latin", 22, 400), fill=MUTED)

    cover = os.path.join(ROOT, p["cover"]) if p.get("cover") else ""
    if cover and os.path.exists(cover):
        drop(im, framed(cover, 600, 375), (640, 120), angle=-3)
        if p.get("video"):  # botón de play sobre las portadas de video
            d = ImageDraw.Draw(im)
            cx, cy = 1040, 448
            d.ellipse((cx - 34, cy - 34, cx + 34, cy + 34), fill=CAT_TXT[cat])
            d.polygon([(cx - 10, cy - 16), (cx - 10, cy + 16), (cx + 16, cy)], fill=(255, 255, 255))
    save(im, out_path, f"({size}px, {n} líneas)")


def blend(color, a, base=HOME_BG):
    return tuple(round(base[i] * (1 - a) + color[i] * a) for i in range(3))


def render_home(lines, projects, out_path):
    """Como el hero de la portada: todo centrado sobre el fondo con grilla, brillo y cuadrados."""
    im = Image.new("RGB", (W, H), HOME_BG)
    # brillo pastel con los tres colores
    for x, y, r, color, a in [(420, 300, 250, CAT["it"], 0.24), (790, 280, 240, CAT["cap"], 0.2), (610, 470, 220, CAT["cont"], 0.22)]:
        blob = Image.new("L", (W, H), 0)
        ImageDraw.Draw(blob).ellipse((x - r, y - r, x + r, y + r), fill=int(255 * a))
        im.paste(Image.new("RGB", (W, H), color), (0, 0), blob.filter(ImageFilter.GaussianBlur(r * 0.5)))
    # grilla fina que se desvanece hacia los bordes
    grid = Image.new("L", (W, H), 0)
    gd = ImageDraw.Draw(grid)
    for gx in range(W // 2 % 56, W, 56):
        gd.line((gx, 0, gx, H), fill=255)
    for gy in range(0, H, 56):
        gd.line((0, gy, W, gy), fill=255)
    fade = Image.new("L", (W, H), 0)
    ImageDraw.Draw(fade).ellipse((60, -40, W - 60, H + 40), fill=255)
    fade = fade.filter(ImageFilter.GaussianBlur(120))
    alpha = Image.composite(grid, Image.new("L", (W, H), 0), fade).point(lambda v: v * 16 // 255)
    im.paste(Image.new("RGB", (W, H), TEXT), (0, 0), alpha)
    # cuadrados sueltos
    d = ImageDraw.Draw(im)
    for (x, y), c in zip([(96, 150), (1060, 110), (170, 430), (990, 400), (1110, 520)], ["it", "cap", "cont", "it", "cont"]):
        d.rounded_rectangle((x, y, x + 40, y + 40), 8, fill=blend(CAT[c], 0.2))

    brand(im, 52)
    d = ImageDraw.Draw(im)
    # etiqueta en una pastilla blanca
    kf = font("jetbrains-mono-latin", 19, 500)
    tw = d.textlength(HOME_KICKER_UP, font=kf)
    pw, ph = tw + 64, 44
    px, py = (W - pw) / 2, 150
    d.rounded_rectangle((px, py, px + pw, py + ph), 22, fill=(255, 255, 255), outline=(228, 224, 215), width=1)
    d.ellipse((px + 20, py + 17, px + 30, py + 27), fill=CAT_TXT["it"])
    d.text((px + 42, py + 11), HOME_KICKER_UP, font=kf, fill=(58, 59, 66))
    # título centrado: el más grande en que la línea más ancha entre en 1080 px
    for size in range(84, 40, -2):
        f = font("schibsted-grotesk-latin", size)
        if max(width(d, line_text(l), f) for l in lines) <= 1080:
            break
    lh = round(size * 1.06)
    top = 232
    for i, l in enumerate(lines):
        draw_line(d, ((W - width(d, line_text(l), f)) / 2, top + i * lh), l, f)
    # reparto de proyectos, como la pastilla del hero
    n = {"it": 0, "cap": 0, "cont": 0}
    for p in projects:
        n[p["cat"]] += 1
    bf = font("hanken-grotesk-latin", 24, 400)
    nf = font("schibsted-grotesk-latin", 30)
    total = str(len(projects))
    parts = [("it", "IT"), ("cap", "Capacitación"), ("cont", "Contenido")]
    label = "proyectos publicados"
    seg = [d.textlength(f"{name} {n[c]}", font=bf) + 22 for c, name in parts]
    inner = d.textlength(total, font=nf) + 10 + d.textlength(label, font=bf) + 28 + sum(seg) + 18 * (len(seg) - 1)
    bw, bh = inner + 56, 60
    bx, by = (W - bw) / 2, top + len(lines) * lh + 46
    d.rounded_rectangle((bx, by, bx + bw, by + bh), 30, fill=(255, 255, 255), outline=(228, 224, 215), width=1)
    x = bx + 28
    d.text((x, by + 12), total, font=nf, fill=TEXT)
    x += d.textlength(total, font=nf) + 10
    d.text((x, by + 16), label, font=bf, fill=(58, 59, 66))
    x += d.textlength(label, font=bf) + 14
    d.line((x, by + 16, x, by + bh - 16), fill=(228, 224, 215), width=2)
    x += 14
    for (c, name), w in zip(parts, seg):
        d.ellipse((x, by + 26, x + 10, by + 36), fill=CAT_TXT[c])
        d.text((x + 18, by + 16), f"{name} {n[c]}", font=bf, fill=MUTED)
        x += w + 18
    uf = font("jetbrains-mono-latin", 20, 400)
    d.text(((W - d.textlength(URL, font=uf)) / 2, 572), URL, font=uf, fill=MUTED)
    save(im, out_path, f"({size}px, {len(lines)} líneas)")


def load_js(expr):
    js = ("global.window={};require('./assets/js/i18n.js');require('./assets/js/projects.js');"
          f"process.stdout.write(JSON.stringify({expr}))")
    out = subprocess.run(["node", "-e", js], cwd=ROOT, capture_output=True, check=True)
    return json.loads(out.stdout.decode("utf-8"))


def main():
    import sys
    projects = load_js("window.PROJECTS")
    render_home(headline_lines(load_js("window.I18N.es.headline")), projects,
                os.path.join(ROOT, "assets", "img", "og-image.jpg"))
    if sys.argv[1:] == ["home"]:
        return
    only = sys.argv[1:]  # slugs puntuales: python tools/make-og.py <slug> ...
    out_dir = os.path.join(ROOT, "assets", "img", "og")
    os.makedirs(out_dir, exist_ok=True)
    for p in projects:
        if only and p["slug"] not in only:
            continue
        render_case(p, os.path.join(out_dir, f"{p['slug']}.jpg"))


if __name__ == "__main__":
    main()
