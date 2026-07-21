#!/bin/bash
# Optimiza imágenes del brochure hacia web/assets/img/
# - PNGs de producto/empaque (transparencia): resize a 800px máx
# - Fotos grandes: JPEG 1600px
# - Sellos/logos: 400px
cd "$(dirname "$0")/.."
OUT="web/assets/img"
mkdir -p "$OUT"

sanitize() {
  # minúsculas, sin acentos, espacios y paréntesis a guiones
  echo "$1" | iconv -f UTF-8 -t ASCII//TRANSLIT 2>/dev/null | \
    tr '[:upper:]' '[:lower:]' | sed -E 's/\.(png|jpg|jpeg)$//' | \
    sed -E 's/[^a-z0-9]+/-/g; s/-+/-/g; s/^-|-$//g'
}

process() { # $1=src  $2=maxpx  $3=format(png|jpeg)
  local src="$1" maxpx="$2" fmt="$3"
  [ -f "$src" ] || { echo "MISSING: $src" >> web/missing_images.log; return; }
  local base slug ext
  base="$(basename "$src")"
  slug="$(sanitize "$base")"
  [ "$fmt" = "jpeg" ] && ext="jpg" || ext="png"
  local dest="$OUT/$slug.$ext"
  [ -f "$dest" ] && return
  sips -Z "$maxpx" -s format "$fmt" "$src" --out "$dest" >/dev/null 2>&1 || \
    echo "FAIL: $src" >> web/missing_images.log
}

rm -f web/missing_images.log

# ---- Fotos (JPEG grandes) ----
for f in "EMPLEADOS.png" "CARRO01.png" "clientes-img.png" "maquila-clientes.png" \
         "bodega.jpeg" "calidad.jpeg" "planta.jpeg" "snacks.jpeg" "especial.jpeg" \
         "fondo-legado.jpeg" "moneda-platano.jpeg" "maquila con nosotros.jpeg" \
         "ejemplo maquila.jpeg" "portada-fondo.png" "mapa.png"; do
  process "$f" 1600 jpeg
done

# ---- Logos y sellos (PNG pequeños) ----
for f in "logo.png" "icon-p.png" "patakis-logo.png" "logo-goya.png" \
         "SELLO Bureau-Veritas-ISO-9001-Logo.png" "SELLO GLUTEN.png" \
         "SELLO Invima-logo.png" "SELLO KOSHER.png" "SELLO LIBRE.png" \
         "SELLO VERIFIED.png" "sabor autentico.png" \
         "portada-logo.png" "portada-hoja-arriba.png" "portada-hojas-abajo-izq.png" \
         "portada-hojas-der.png" "portada-hojas-izq.png"; do
  process "$f" 500 png
done

# ---- Productos y empaques (PNG 800px, conservan transparencia) ----
# Raíz del brochure
for f in *.png *.jpg; do
  case "$f" in
    EMPLEADOS*|CARRO01*|clientes-img*|maquila-clientes*|portada-*|logo*|icon-p*|SELLO*|mapa*|sabor*) continue;;
  esac
  process "$f" 800 png
done
# Subcarpetas
for f in productos/*.png empaques/*.png empaques/*.jpg; do
  process "$f" 800 png
done
# goya
process "goya-maduro.png" 800 png
process "goya-verde.png" 800 png
process "canasta.png" 800 png
process "moneda-platano.png" 800 png

echo "=== DONE ==="
ls "$OUT" | wc -l
du -sh "$OUT"
[ -f web/missing_images.log ] && cat web/missing_images.log
