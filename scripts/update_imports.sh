#!/bin/bash

echo -n "UPDATING IMPORTS ... "

media_files=()

# add all media files
html_files=$(find src/* -type f -name "*.html" -not -path "*/node_modules/*")
for f in $html_files; do
	# within img tags
	media_files+=$(grep -Eo 'src="[^"]+"' $f | sed 's/src="//' | sed 's/"$//' | sed 's/public\// .\/public\//')

	# within explicit background-image inline styles
	media_files+=$(grep -Eo 'background-image: url\("[^"]+"\)' $f | sed 's/background-image: url("//' | sed 's/")$//' | sed 's/public\// .\/public\//')
done

js_files=$(find src/scripts/shared/* -type f -name "*.js" -not -path "*index.js" -and -not -path "*scripted_imports.js" | sed 's/src\//.\//')
css_files=$(find src/styles/shared/* -type f -name "*.css" | sed 's/src\// .\//g')
font_files=$(find src/public/fonts/* -type f -name "*.ttf" | sed 's/src\// .\//g')

FILENAME='./src/scripted_imports.js'
rm $FILENAME
touch $FILENAME

for f in $media_files; do
	if [[ $f != *".js" ]]; then
		echo "import '$f'" >> $FILENAME
	fi
	
	# echo "import '$f'" >> $FILENAME
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

if [ $? -eq 0 ]; then
	echo -e "\e[32mSUCCESS\e[0m"
else
	echo -e "\e[31mFAILED\e[0m"
fi