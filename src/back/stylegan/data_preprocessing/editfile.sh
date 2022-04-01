#!/bin/bash

for file1 in *
echo "$file1"
do
	for file2 in $file1/*
	do
		a=$file2
		str1=$file1"/S004"
		str2=$file1"/S005"
		str3=$file1"/S006"
		if [${a}=="$str1"];then
			echo "true"
		fi
	done
done
