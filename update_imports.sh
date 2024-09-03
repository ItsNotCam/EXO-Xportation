#!/bin/bash

echo "UPDATING IMPORTS"

media_files=()

# add all media files
html_files=$(find src/* -type f -name "*.html" -not -path "*/node_modules/*")
for f in $html_files; do
	media_files+=$(grep -Eo 'src="[^"]+"' $f | sed 's/src="//' | sed 's/"$//' | sed 's/public\// ..\/public\//')
done

js_files=$(find src/* -type f -name "*.js" -not -path "*index.js" -and -not -path "*scripted_imports.js" | sed 's/src\//.\//')
css_files=$(find src/* -type f -name "*.css" -not -path "*/node_modules/*" | sed 's/src\// .\//g')
font_files=$(find public/* -type f -name "*.ttf" -not -path "*/node_modules/*" | sed 's/public\// ..\/public\//')

FILENAME='./src/scripted_imports.js'
rm $FILENAME
touch $FILENAME

for f in $media_files; do
	# echo "'$f'"
	echo "import '$f'" >> $FILENAME
done

echo "" >> $FILENAME

for f in $font_files; do
	# echo "'$f'"
	echo "import '$f'" >> $FILENAME
done

echo "" >> $FILENAME

for f in $js_files; do
	# echo "'$f'"
	echo "import '$f'" >> $FILENAME
done

echo "" >> $FILENAME

for f in $css_files; do
	# echo "'$f'"
	echo "import '$f'" >> $FILENAME
done

echo "" >> $FILENAME

echo "DONE"