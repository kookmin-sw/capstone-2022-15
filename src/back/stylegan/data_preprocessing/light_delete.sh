#!/bin/bash

for file1 in /home/foscar/다운로드/High_Resolution/*
do
	for file2 in $file1/*
	do
		for file3 in $file2/*
		do
			find . -name 'L3' -type d -exec rm -rf {} \;
			find . -name 'L4' -type d -exec rm -rf {} \;
			find . -name 'L5' -type d -exec rm -rf {} \;
			find . -name 'L6' -type d -exec rm -rf {} \;
			find . -name 'L7' -type d -exec rm -rf {} \;
			find . -name 'L9' -type d -exec rm -rf {} \;
			find . -name 'L10' -type d -exec rm -rf {} \;
			find . -name 'L11' -type d -exec rm -rf {} \;
			find . -name 'L13' -type d -exec rm -rf {} \;
			find . -name 'L14' -type d -exec rm -rf {} \;
			find . -name 'L15' -type d -exec rm -rf {} \;
			find . -name 'L16' -type d -exec rm -rf {} \;
			find . -name 'L17' -type d -exec rm -rf {} \;
			find . -name 'L18' -type d -exec rm -rf {} \;
			find . -name 'L19' -type d -exec rm -rf {} \;
			find . -name 'L20' -type d -exec rm -rf {} \;
			find . -name 'L21' -type d -exec rm -rf {} \;
			find . -name 'L23' -type d -exec rm -rf {} \;
			find . -name 'L24' -type d -exec rm -rf {} \;
			find . -name 'L25' -type d -exec rm -rf {} \;
			find . -name 'L26' -type d -exec rm -rf {} \;
			find . -name 'L27' -type d -exec rm -rf {} \;
			find . -name 'L28' -type d -exec rm -rf {} \;
			find . -name 'L29' -type d -exec rm -rf {} \;
			find . -name 'L30' -type d -exec rm -rf {} \;
		done
	done
done
