"""Genera las tarjetas de vista previa (Open Graph), 1200 x 630:
  - assets/img/og-image.jpg            la de la home, con el título del hero (i18n.js, headline)
  - assets/img/og/<slug>.jpg           una por caso, con el título, la categoría y las etiquetas de la card

Todas parten de tools/og-template.png (fondo, gatito y franja de color) y usan las fuentes del sitio.
Los textos salen de assets/js/i18n.js y assets/js/projects.js: al cambiar un título alcanza con volver a correr esto.

Uso: python tools/make-og.py   (después: node tools/bump-version.mjs)
Requiere: pip install pillow fonttools brotli
"""
import io
import json
import os
import re
import subprocess
from itertools import combinations

from fontTools.ttLib import TTFont
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
W, H = 1200, 630
TEXT = (242, 242, 239)   # --text
MUTED = (154, 154, 163)  # --muted
CAT = {"it": (53, 194, 177), "cap": (236, 127, 176), "cont": (232, 184, 90)}  # --it, --cap, --cont
CAT_LABEL = {"it": "it", "cap": "capacitación", "cont": "contenido"}
HOME_KICKER = "análisis funcional | ux/ui | it"
URL = "lpedaci.github.io/portfolio"
X = 88                   # margen izquierdo
TEXT_MAX = 700           # ancho disponible antes del gatito
TITLE_TOP, TITLE_H = 228, 270  # bloque vertical del título (entre el nombre y la URL)
TRACK = -0.025           # letter-spacing del título, como .hero__title en el sitio (em)


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
# Así "IT." puede llevar "IT" en turquesa y el punto en blanco, como en el hero.
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


def headline_words(html):
    """'De la ... al <em>mundo IT</em>.' -> palabras con el tramo <em> en turquesa."""
    words, glue = [], False
    for part in re.split(r"(<em>.*?</em>)", html):
        if not part:
            continue
        color = CAT["it"] if part.startswith("<em>") else TEXT
        text = re.sub(r"</?em>", "", part)
        for i, w in enumerate(text.split(" ")):
            if w == "":
                glue = False
                continue
            if glue and i == 0 and words:
                words[-1].append((w, color))  # pegado a la palabra anterior (por ejemplo el punto final)
            else:
                words.append([(w, color)])
        glue = not text.endswith(" ")
    return words


def render(template, kicker, kicker_color, title, footer, out_path):
    im = template.copy()
    d = ImageDraw.Draw(im)
    d.text((X, 88), kicker, font=font("jetbrains-mono-latin", 30, 400), fill=kicker_color)
    d.text((X, 150), "Lourdes Pedaci", font=font("hanken-grotesk-latin", 44, 500), fill=MUTED)

    # Título: el tamaño más grande que entre en el bloque (hasta tres líneas y TITLE_H de alto)
    for size in range(84, 47, -2):
        title_f = font("schibsted-grotesk-latin", size)
        lh = round(size * 1.1)
        lines = balance(d, title, title_f, TEXT_MAX)
        if lines and len(lines) * lh <= TITLE_H:
            break
    top = TITLE_TOP + (TITLE_H - len(lines) * lh) // 2 - round(size * 0.08)  # centrado en el bloque
    for i, line in enumerate(lines):
        draw_line(d, (X, top + i * lh), line, title_f)

    d.text((X, 530), footer, font=font("jetbrains-mono-latin", 28, 400), fill=MUTED)
    im.save(out_path, "JPEG", quality=88, optimize=True, progressive=True)
    print(f"{os.path.relpath(out_path, ROOT)}  ({size}px, {len(lines)} líneas)")


def load_js(expr):
    js = ("global.window={};require('./assets/js/i18n.js');require('./assets/js/projects.js');"
          f"process.stdout.write(JSON.stringify({expr}))")
    out = subprocess.run(["node", "-e", js], cwd=ROOT, capture_output=True, check=True)
    return json.loads(out.stdout.decode("utf-8"))


def main():
    template = Image.open(os.path.join(ROOT, "tools", "og-template.png")).convert("RGB")

    # Home: el título del hero, con el mismo resaltado
    headline = load_js("window.I18N.es.headline")
    render(template, HOME_KICKER, CAT["it"], headline_words(headline), URL,
           os.path.join(ROOT, "assets", "img", "og-image.jpg"))

    # Un caso por proyecto
    out_dir = os.path.join(ROOT, "assets", "img", "og")
    os.makedirs(out_dir, exist_ok=True)
    for p in load_js("window.PROJECTS"):
        kicker = " | ".join([CAT_LABEL[p["cat"]]] + p["tags"]["es"])
        render(template, kicker, CAT[p["cat"]], plain_words(p["title"]["es"]), f"{URL}  |  {p['year']}",
               os.path.join(out_dir, f"{p['slug']}.jpg"))


if __name__ == "__main__":
    main()
