set -e

ROOT_DIR=$PWD
COMMON_LIB_FOLDER=$ROOT_DIR/common
DATABASE_LIB_FOLDER=$ROOT_DIR/database
APPLICATION_LIB_FOLDER=$ROOT_DIR/application

echo "====================================================="
echo "=                Build common                       ="
echo "====================================================="
cd $COMMON_LIB_FOLDER
./__ci__/build.sh

echo "====================================================="
echo "=                Build database                     ="
echo "====================================================="
cd $DATABASE_LIB_FOLDER
./__ci__/build.sh

echo "====================================================="
echo "=                Build application                  ="
echo "====================================================="
cd $APPLICATION_LIB_FOLDER
./__ci__/build.sh
