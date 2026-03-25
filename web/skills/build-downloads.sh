#!/usr/bin/env bash
# build-downloads.sh — Generate N1 skill zip files for distribution
# Run from repo root: bash web/skills/build-downloads.sh

set -euo pipefail

# Resolve repo root (script lives at web/skills/build-downloads.sh)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
DOWNLOADS="$SCRIPT_DIR/downloads"
STAGING="$REPO_ROOT/.tmp-build-downloads"

echo "=== N1 Skill Distribution Builder ==="
echo "Repo root: $REPO_ROOT"
echo "Output:    $DOWNLOADS"
echo ""

# Clean previous builds
rm -rf "$STAGING"
mkdir -p "$DOWNLOADS" "$STAGING"

# --------------------------------------------------------------------------
# Helper: create a zip from a staging subdirectory
# Usage: make_zip <staging_subdir> <output_zip_name>
# --------------------------------------------------------------------------
make_zip() {
  local src_dir="$1"
  local zip_name="$2"
  local zip_path="$DOWNLOADS/$zip_name"

  rm -f "$zip_path"
  (cd "$src_dir" && zip -r "$zip_path" . -x '.*') > /dev/null
  echo "  [OK] $zip_name ($(du -h "$zip_path" | cut -f1))"
}

# --------------------------------------------------------------------------
# 1. n1-project.zip (Path A — full project)
# --------------------------------------------------------------------------
echo "Building n1-project.zip..."
PROJECT_DIR="$STAGING/n1-project"
mkdir -p "$PROJECT_DIR"

# N1-INSTRUCTIONS.md (the orchestrator)
if [[ -f "$DOWNLOADS/N1-INSTRUCTIONS.md" ]]; then
  cp "$DOWNLOADS/N1-INSTRUCTIONS.md" "$PROJECT_DIR/"
else
  echo "  [WARN] N1-INSTRUCTIONS.md not found in downloads/ — skipping"
fi

# LEEME.txt for full project
cat > "$PROJECT_DIR/LEEME.txt" << 'LEEME_EOF'
N1 — El Sistema Eres Tu
========================

Como crear tu proyecto N1 en Claude:

1. Abri claude.ai y crea un proyecto nuevo
   - Nombre: N1
   - Descripcion: Estrategia de carrera basada en investigacion. Autoconocimiento + herramientas concretas.

2. En "Custom Instructions" (Instrucciones personalizadas):
   - Abri el archivo N1-INSTRUCTIONS.md
   - Copia todo el contenido
   - Pegalo en el campo de instrucciones

3. En "Knowledge" (Archivos de conocimiento):
   - Subi TODOS los demas archivos .md de esta carpeta
   - (todos menos N1-INSTRUCTIONS.md y este LEEME.txt)

4. Modelo recomendado: Claude Sonnet

5. Listo. Empeza un chat nuevo y deci lo que necesitas:
   - "Analiza esta oferta de trabajo"
   - "Quiero explorar mis valores"
   - "Auditame el CV"
   - "No se que hacer con mi carrera"

Si completaste alguna evaluacion en la web de N1 (CAAS-12, MLQ-10, Bull's Eye, Ghost Check, Flow Logger), podes pegar o subir tus resultados y el sistema los incorpora automaticamente.

Orientacion profesional basada en investigacion. No es terapia.
Gratis para siempre.
LEEME_EOF

# 5 shared files
for f in safety-protocol.md voice-guide.md profile-format.md research-base.md prompting-stack.md; do
  cp "$REPO_ROOT/shared/$f" "$PROJECT_DIR/"
done

# 5 SKILL.md files (renamed with skill name)
declare -A SKILLS=(
  [ghost-check]="skills/ghost-check/SKILL.md"
  [compass]="skills/compass/SKILL.md"
  [busca-adentro]="skills/busca-adentro/SKILL.md"
  [construye-afuera]="skills/construye-afuera/SKILL.md"
  [n1-system]="skills/n1-system/SKILL.md"
)

for skill_name in "${!SKILLS[@]}"; do
  cp "$REPO_ROOT/${SKILLS[$skill_name]}" "$PROJECT_DIR/SKILL-${skill_name}.md"
done

# 7 reference files (4 busca-adentro + 3 construye-afuera)
for f in values-framework.md strengths-framework.md identity-framework.md purpose-framework.md; do
  cp "$REPO_ROOT/skills/busca-adentro/references/$f" "$PROJECT_DIR/"
done
for f in career-path-adaptations.md latam-market-context.md assessment-scoring.md; do
  cp "$REPO_ROOT/skills/construye-afuera/references/$f" "$PROJECT_DIR/"
done

make_zip "$PROJECT_DIR" "n1-project.zip"

# --------------------------------------------------------------------------
# 2. Individual skill zips (Path B — one per skill)
# --------------------------------------------------------------------------
echo ""
echo "Building individual skill zips..."

# Define reads per skill (excluding SKILL.md itself)
# ghost-check reads: shared/safety-protocol.md, shared/voice-guide.md, shared/profile-format.md
# compass reads: shared/safety-protocol.md, shared/voice-guide.md, shared/profile-format.md, shared/research-base.md
# busca-adentro reads: shared/prompting-stack.md, shared/voice-guide.md, shared/safety-protocol.md, shared/research-base.md, shared/profile-format.md, + 4 reference files
# construye-afuera reads: shared/prompting-stack.md, shared/voice-guide.md, shared/safety-protocol.md, shared/research-base.md, shared/profile-format.md, + 3 reference files
# n1-system reads: all 5 shared + busca-adentro/SKILL.md + 4 BA refs + construye-afuera/SKILL.md + 3 CA refs

# Skill display names for LEEME.txt
declare -A SKILL_DISPLAY_NAMES=(
  [ghost-check]="Ghost Check"
  [compass]="Compass"
  [busca-adentro]="Busca Adentro"
  [construye-afuera]="Construye Afuera"
  [n1-system]="N1 System"
)

# Function to build individual skill zip
build_skill_zip() {
  local skill_name="$1"
  shift
  local reads=("$@")

  local skill_dir="$STAGING/$skill_name"
  mkdir -p "$skill_dir"

  local display_name="${SKILL_DISPLAY_NAMES[$skill_name]}"

  # Copy SKILL.md
  cp "$REPO_ROOT/skills/$skill_name/SKILL.md" "$skill_dir/"

  # Copy all reads (using original filenames, renaming collisions)
  for read_path in "${reads[@]}"; do
    local filename
    filename="$(basename "$read_path")"
    # If a read is another skill's SKILL.md, rename to avoid overwriting this skill's SKILL.md
    if [[ "$filename" == "SKILL.md" ]]; then
      # Extract skill name from path like "skills/busca-adentro/SKILL.md"
      local other_skill
      other_skill="$(echo "$read_path" | sed -n 's|skills/\([^/]*\)/SKILL\.md|\1|p')"
      if [[ -n "$other_skill" && "$other_skill" != "$skill_name" ]]; then
        filename="SKILL-${other_skill}.md"
      fi
    fi
    cp "$REPO_ROOT/$read_path" "$skill_dir/$filename"
  done

  # Generate LEEME.txt for this skill
  cat > "$skill_dir/LEEME.txt" << SKILL_LEEME_EOF
N1 $display_name
$(printf '=%.0s' $(seq 1 $((${#display_name} + 3))))

Como instalar este skill en Claude:

1. Abri claude.ai
2. Hace clic en el menu de skills (o "Upload a skill")
3. Arrastra este archivo .zip o subi los archivos

Listo. El skill esta instalado.

Orientacion profesional basada en investigacion. No es terapia.
SKILL_LEEME_EOF

  make_zip "$skill_dir" "${skill_name}.zip"
}

# ghost-check
build_skill_zip "ghost-check" \
  "shared/safety-protocol.md" \
  "shared/voice-guide.md" \
  "shared/profile-format.md"

# compass
build_skill_zip "compass" \
  "shared/safety-protocol.md" \
  "shared/voice-guide.md" \
  "shared/profile-format.md" \
  "shared/research-base.md"

# busca-adentro
build_skill_zip "busca-adentro" \
  "shared/prompting-stack.md" \
  "shared/voice-guide.md" \
  "shared/safety-protocol.md" \
  "shared/research-base.md" \
  "shared/profile-format.md" \
  "skills/busca-adentro/references/values-framework.md" \
  "skills/busca-adentro/references/strengths-framework.md" \
  "skills/busca-adentro/references/identity-framework.md" \
  "skills/busca-adentro/references/purpose-framework.md"

# construye-afuera
build_skill_zip "construye-afuera" \
  "shared/prompting-stack.md" \
  "shared/voice-guide.md" \
  "shared/safety-protocol.md" \
  "shared/research-base.md" \
  "shared/profile-format.md" \
  "skills/construye-afuera/references/career-path-adaptations.md" \
  "skills/construye-afuera/references/latam-market-context.md" \
  "skills/construye-afuera/references/assessment-scoring.md"

# n1-system
build_skill_zip "n1-system" \
  "shared/prompting-stack.md" \
  "shared/voice-guide.md" \
  "shared/safety-protocol.md" \
  "shared/research-base.md" \
  "shared/profile-format.md" \
  "skills/busca-adentro/SKILL.md" \
  "skills/busca-adentro/references/values-framework.md" \
  "skills/busca-adentro/references/strengths-framework.md" \
  "skills/busca-adentro/references/identity-framework.md" \
  "skills/busca-adentro/references/purpose-framework.md" \
  "skills/construye-afuera/SKILL.md" \
  "skills/construye-afuera/references/career-path-adaptations.md" \
  "skills/construye-afuera/references/latam-market-context.md" \
  "skills/construye-afuera/references/assessment-scoring.md"

# --------------------------------------------------------------------------
# Summary
# --------------------------------------------------------------------------
echo ""
echo "=== Build complete ==="
echo ""
echo "Files in $DOWNLOADS:"
ls -lh "$DOWNLOADS"/*.zip 2>/dev/null | awk '{print "  " $NF " — " $5}'
echo ""
echo "Total:"
du -sh "$DOWNLOADS"/*.zip 2>/dev/null | awk '{total+=$1} END {print "  " total+0 " KB in 6 zip files"}'

# Clean up staging
rm -rf "$STAGING"

echo ""
echo "Done."
