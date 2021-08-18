set -e
echo "======================================="
echo "=  Cleanup library module: database   ="
echo "======================================="
npm prune --production
rm -r src
