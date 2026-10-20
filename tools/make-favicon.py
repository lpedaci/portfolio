"""Genera el ícono del sitio con la marca del design system: tres círculos superpuestos en los colores
de las categorías (turquesa, rosa y ámbar, versiones "bright"), sobre el fondo papel del sitio.
En el ícono van en racimo; en el nav, en fila.

Salida (en assets/img):
  favicon.svg            vectorial, para navegadores modernos
  favicon-32.png         pestaña del navegador
  apple-touch-icon.png   180 x 180, acceso directo en iOS
  icon-192.png / icon-512.png        manifiesto (Android, escritorio)
  icon-maskable-512.png  manifiesto, con la marca dentro de la zona segura del recorte

Uso: python tools/make-favicon.py   Requiere: pip install pillow
"""
import os

from PIL import Image, ImageDraw

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
OUT = os.path.join(ROOT, "assets", "img")
BG = "#F7F5F0"                                     # --bg
DOTS = ["#35C2B1", "#EC7FB0", "#E8B85A"]           # --it-bright, --cap-bright, --cont-bright
RING = 0.075                                       # aro de fondo entre círculos, en proporción al radio

# Geometría en un lienzo de 512: los mismos tres círculos de la marca del nav, agrupados en racimo
# (dos arriba y uno abajo) para llenar el cuadrado y leerse bien a 16 y 32 px
R = 116
PTS = [(186, 198), (326, 198), (256, 318)]


def svg():
    ring = round(R * RING * 2)
    circles = "\n".join(
        f'  <circle cx="{x}" cy="{y}" r="{R}" fill="{c}" stroke="{BG}" stroke-width="{ring}"/>' for (x, y), c in zip(PTS, DOTS)
    )
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\n'
            f'  <title>Porfolio de Lourdes Pedaci</title>\n'
            f'  <rect width="512" height="512" rx="112" fill="{BG}"/>\n{circles}\n</svg>\n')


def png(size, rounded=True, scale=1.0):
    """Dibuja a 4x y reduce, para bordes suaves. scale < 1 achica la marca (zona segura del ícono maskable)."""
    k = 4
    s = size * k
    im = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    if rounded:
        d.rounded_rectangle((0, 0, s - 1, s - 1), round(s * 112 / 512), fill=BG)
    else:
        d.rectangle((0, 0, s, s), fill=BG)
    f = s / 512
    for (x, y), c in zip(PTS, DOTS):
        cx = s / 2 + (x - 256) * f * scale
        cy = s / 2 + (y - 256) * f * scale
        r = R * f * scale
        ring = r * RING
        d.ellipse((cx - r - ring, cy - r - ring, cx + r + ring, cy + r + ring), fill=BG)
        d.ellipse((cx - r, cy - r, cx + r, cy + r), fill=c)
    return im.resize((size, size), Image.LANCZOS)


def main():
    with open(os.path.join(OUT, "favicon.svg"), "w", encoding="utf-8") as f:
        f.write(svg())
    png(32).save(os.path.join(OUT, "favicon-32.png"))
    png(180, rounded=False).convert("RGB").save(os.path.join(OUT, "apple-touch-icon.png"))  # iOS redondea solo
    png(192).save(os.path.join(OUT, "icon-192.png"))
    png(512).save(os.path.join(OUT, "icon-512.png"))
    png(512, rounded=False, scale=0.78).convert("RGB").save(os.path.join(OUT, "icon-maskable-512.png"))
    print("íconos generados en assets/img")


if __name__ == "__main__":
    main()
