#!/bin/sh

echo "Checking Teams"
curl -v 'http://localhost:1337/api/index.php/fetchteam/2TMS'
echo ""
