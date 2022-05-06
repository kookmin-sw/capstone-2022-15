#!/bin/bash

for file1 in /home/foscar/다운로드/High_Resolution/*
do
	for file2 in $file1/*
	do
		find . -name 'S004' -type d -exec rm -rf {} \;
		find . -name 'S005' -type d -exec rm -rf {} \;
		find . -name 'S006' -type d -exec rm -rf {} \;
	done
done
