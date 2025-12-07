#!/usr/bin/bash

OUT=./public/resources/crosswords/thumbnails/

for file in "$@"; do
    outpath=$OUT/$(basename $file .crossword.json)/
    mkdir -p $outpath
    typst compile thumbnail_generation/crosswords/main.typ --root ../../ --input i=../../$file $outpath/{p}.svg
done
