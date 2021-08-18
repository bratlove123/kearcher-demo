set -e
echo "======================================="
echo "= Cleanup library module: application ="
echo "======================================="
npm prune --production
rm -r src
