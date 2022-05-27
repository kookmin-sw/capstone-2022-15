#!/bin/sh
if [ -z "${AWS_LAMBDA_RUNTIME_API}" ]; then
  exec /usr/local/bin/aws-lambda-rie /opt/conda-env/bin/python -m awslambdaric $@
else
  exec /opt/conda-env/bin/python -m awslambdaric $@
fi
