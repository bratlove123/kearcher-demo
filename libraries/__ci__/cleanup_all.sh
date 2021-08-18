set -e

ROOT_DIR=$PWD
COMMON_LIB_FOLDER=$ROOT_DIR/common
DATABASE_LIB_FOLDER=$ROOT_DIR/database
APPLICATION_LIB_FOLDER=$ROOT_DIR/application

echo "====================================================="
echo "=              Cleanup common                       ="
echo "====================================================="
cd $COMMON_LIB_FOLDER
./__ci__/cleanup.sh

echo "====================================================="
echo "=              Cleanup database                     ="
echo "====================================================="
cd $DATABASE_LIB_FOLDER
./__ci__/cleanup.sh

echo "====================================================="
echo "=              Cleanup application                  ="
echo "====================================================="
cd $APPLICATION_LIB_FOLDER
./__ci__/cleanup.sh

