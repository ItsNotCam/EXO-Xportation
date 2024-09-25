#!/bin/bash

mkdir -p dist/styles
echo -n "COMBINING CSS FILES ... "
COMBINED_PATH="./master.css"
for file in ./src/styles/**/*.css; do
	echo -e "\n\n/* FROM: '$file' */\n" >> $COMBINED_PATH
	cat "$file" >> $COMBINED_PATH
done

if [ $? -eq 0 ]; then
	echo -e "\e[32mSUCCESS\e[0m"
else
	echo -e "\e[31mFAILED\e[0m"
fi