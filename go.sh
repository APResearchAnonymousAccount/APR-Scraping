#!/bin/bash

for i in {1..40}
do
    term=`sed "${i}q;d" searchTerms.txt`
    echo $term
    touch "resTwitter/${term}.json"
    python twitterScraper.py "$term"

done