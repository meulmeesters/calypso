#!/usr/bin/env bash

# This script is used to install source in the right place
# on our digital ocean server. Since this script will need
# to contain the password it's expected that the password
# will be stored in a iuclid-password.txt file.

PASSWORD=`cat ~/iuclid-password.txt`

sed -i "s/%PASSWORD%/$PASSWORD/g" ../calypso/index.html

rm -rf ~/client/*
cp -r ../calypso/* ~/client/
