set -e

ROOT_DIR=$PWD
COMMON_LIB_FOLDER=$ROOT_DIR/common
DATABASE_LIB_FOLDER=$ROOT_DIR/database
APPLICATION_LIB_FOLDER=$ROOT_DIR/application

echo "====================================================="
echo "=                  Install common                   ="
echo "====================================================="
cd $COMMON_LIB_FOLDER
./__ci__/install.sh

echo "====================================================="
echo "=                  Install database                 ="
echo "====================================================="
cd $DATABASE_LIB_FOLDER
./__ci__/install.sh

echo "====================================================="
echo "=                 Install application               ="
echo "====================================================="
cd $APPLICATION_LIB_FOLDER
./__ci__/install.sh

