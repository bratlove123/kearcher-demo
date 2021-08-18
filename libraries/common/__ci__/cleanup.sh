set -e
echo "======================================="
echo "=   Cleanup library module: common    ="
echo "======================================="
npm prune --production
rm -r src
