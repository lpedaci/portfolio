"""Genera assets/fonts/phosphor-subset.woff2 y assets/css/icons.css con solo los íconos que usa el sitio.

Uso: python tools/make-icons.py RUTA/Phosphor.woff2 RUTA/style.css
(los dos archivos salen del paquete @phosphor-icons/web, carpeta src/regular).
Para sumar un ícono: agregar su nombre a USED y volver a correr. Requiere: pip install fonttools brotli
"""
import os
import re
import subprocess
import sys

USED = [
    "arrow-down", "arrow-left", "arrow-right", "arrow-up", "arrow-up-right", "check", "check-circle", "copy",
    "download-simple", "envelope-simple", "list", "magnifying-glass", "pause", "play", "slideshow",
    "squares-four", "x", "x-circle",
]

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
woff2, style = sys.argv[1], sys.argv[2]
css = open(style, encoding="utf-8").read()

codes = {}
for name in USED:
    m = re.search(r"\.ph\.ph-" + re.escape(name) + r":before \{\s*content: \"\\([0-9a-f]+)\";", css)
    if not m:
        sys.exit(f"no existe el ícono {name}")
    codes[name] = m.group(1)

out = os.path.join(ROOT, "assets", "fonts", "phosphor-subset.woff2")
subprocess.run([sys.executable, "-m", "fontTools.subset", woff2,
                "--unicodes=" + ",".join("U+" + c for c in codes.values()),
                "--flavor=woff2", "--output-file=" + out, "--no-hinting"], check=True)

base = re.search(r"(\.ph \{.*?\n\})", css, re.S).group(1)
rules = "\n".join('.ph.ph-%s:before { content: "\\%s"; }' % (n, c) for n, c in codes.items())
with open(os.path.join(ROOT, "assets", "css", "icons.css"), "w", encoding="utf-8") as f:
    f.write("/* Íconos Phosphor (regular, licencia MIT), recortados a los que usa el sitio.\n"
            "   Se genera con tools/make-icons.py; no editar a mano. */\n")
    f.write('@font-face {\n  font-family: "Phosphor";\n  src: url("../fonts/phosphor-subset.woff2") format("woff2");\n'
            "  font-weight: normal;\n  font-style: normal;\n  font-display: block;\n}\n")
    f.write(base + "\n" + rules + "\n")
print(os.path.getsize(out), "bytes,", len(codes), "íconos")
