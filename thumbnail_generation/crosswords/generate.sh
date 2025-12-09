#!/usr/bin/bash

OUT=./public/resources/crosswords/thumbnails

generated_files=()

for file in "$@"; do
    outdir=$OUT/$(basename $file .crossword.json)/
    mkdir -p $outdir
    typst compile thumbnail_generation/crosswords/main.typ --root ../../ --input i=../../$file $outdir/{p}.svg

    while IFS= read -r -d '' thumbnail; do
        if ! git diff --quiet "$thumbnail" 2>/dev/null || ! git ls-files --error-unmatch "$thumbnail" >/dev/null 2>&1; then
            generated_files+=("$thumbnail")
        fi
    done < <(find "$outdir" -type f -name "*.svg" -print0)
done

if [ ${#generated_files[@]} -gt 0 ]; then
    echo "Generated/modified thumbnails:"
    printf '  %s\n' "${generated_files[@]}"
    echo ""
    echo "Please stage these files and commit again:"
    echo "  git add ${OUT}"
    exit 1
fi
