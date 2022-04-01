#!/bin/bash

for file1 in /home/foscar/다운로드/High_Resolution/*
do
	for file2 in $file1/*
	do
		for file3 in $file2/*
		do
			for file4 in $file3/*
			do
				for file4 in $file3/*
				do
					find . -name '*C1*' -type f -exec rm -rf {} \;
					find . -name '*C2*' -type f -exec rm -rf {} \;
					find . -name '*C3*' -type f -exec rm -rf {} \;
					find . -name '*C4*' -type f -exec rm -rf {} \;
					find . -name '*C8*' -type f -exec rm -rf {} \;
					find . -name '*C9*' -type f -exec rm -rf {} \;
					find . -name '*C10*' -type f -exec rm -rf {} \;
					find . -name '*C11*' -type f -exec rm -rf {} \;
					find . -name '*C12*' -type f -exec rm -rf {} \;
					find . -name '*C13*' -type f -exec rm -rf {} \;
					find . -name '*C14*' -type f -exec rm -rf {} \;
					find . -name '*C15*' -type f -exec rm -rf {} \;
					find . -name '*C16*' -type f -exec rm -rf {} \;
					find . -name '*C17*' -type f -exec rm -rf {} \;
					find . -name '*C18*' -type f -exec rm -rf {} \;
					find . -name '*C19*' -type f -exec rm -rf {} \;
					find . -name '*C20*' -type f -exec rm -rf {} \;
					find . -name '*.txt' -type f -exec rm -rf {} \;
				done
			done
		done
	done
done
