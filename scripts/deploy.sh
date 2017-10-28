#!/usr/bin/env bash

# This script is used to install source in the right place
# on our digital ocean server. Since this script will need
# to contain the password it's expected that the password
# will be stored in a iuclid-password.txt file.

PASS=`cat /home/iuclid/iuclid-password.txt`
echo "Using password: $PASS"

sed -i "s/%PASSWORD%/$PASS/g" ../calypso/js/*.js

rm -rf /home/iuclid/client
mkdir /home/iuclid/client
cp -r /home/iuclid/git/calypso/calypso/* /home/iuclid/client/

sudo systemctl restart nginx
