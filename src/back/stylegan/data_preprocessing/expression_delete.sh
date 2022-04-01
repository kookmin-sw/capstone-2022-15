#!/bin/bash

for file1 in /home/foscar/다운로드/High_Resolution/*
do
	for file2 in $file1/*
	do
		for file3 in $file2/*
		do
			for file4 in $file3/*
			do
				find . -name 'E03' -type d -exec rm -rf {} \;
			done
		done
	done
done
