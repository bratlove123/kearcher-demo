#!/bin/sh

# Fail on error
set -e

# Set some variables
ROOT_DIR=$PWD
INPUT_DIR=$ROOT_DIR/input
OUTPUT_DIR=$ROOT_DIR/output

SERVICE_RES=$OUTPUT_DIR/${SERVICE_NAME}_infrastructure.yml
COMP_FOLDER=$ROOT_DIR/components/${SUB_COMPONENT}

INFRA_FILE=$INPUT_DIR/infrastructure.yml
SERVICE_INFRA_FILE=$INPUT_DIR/${SERVICE_NAME}_infrastructure.yml


echo "====================================================="
echo "=      Deploying on environment: [$ENVNAME]      ="
echo "====================================================="
echo
echo "* Service name: $SERVICE_NAME"
echo "* Service version: $VERSION"
echo "* Sub-component: $SUB_COMPONENT"
echo ""
echo "- User: $(id)"
echo "- Node version: $(node --version)"
echo "- NPM version: $(npm --version)"
echo "- Serverless version: $(sls --version)"
echo "- Current directory: $ROOT_DIR"
ls -la
ls -la $INPUT_DIR
echo ""

echo "====================================================="
echo "=             Infrastructure resources              ="
echo "====================================================="
# Remove local infrastructure file
rm -f $COMP_FOLDER/infrastructure.yml

# Print infrastructure file and replace the local one
cat $INFRA_FILE
cp -f $INFRA_FILE $COMP_FOLDER

echo "====================================================="
echo "=       Installing sub-component dependencies       ="
echo "====================================================="
cd $COMP_FOLDER
ls -la
# As there is no package.json we commented this out to avoid main component
# package.json to be installed i.e $ROOT_DIR/package.json
# npm install --no-optional

echo "====================================================="
echo "=           Starting Serverless deployment          ="
echo "====================================================="
sls deploy --verbose --stage $STAGE

echo "====================================================="
echo "=       Saving deployment output information        ="
echo "====================================================="
echo "- Infrastructure filename: $SERVICE_INFRA_FILE"
output="$(sls info --verbose --stage $STAGE)"
echo "${output##*Outputs}" > $SERVICE_INFRA_FILE
ls -la $INPUT_DIR
cat $SERVICE_INFRA_FILE