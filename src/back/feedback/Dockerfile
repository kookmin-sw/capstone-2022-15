FROM public.ecr.aws/lambda/python:3.8

# default install
RUN yum update -y
RUN yum install -y wget
RUN yum install -y git
RUN yum install mesa-libGL -y
RUN yum install libsndfile -y
RUN pip freeze > requirements.txt

# Download Feedback files
RUN git clone -b develop --single-branch https://github.com/kookmin-sw/capstone-2022-15
RUN mv capstone-2022-15/src/back/feedback/* ./
RUN rm -rf capstone-2022-15
# RUN pip install -r requirements.txt

# RUN ls
# Setting Conda
ENV PATH /opt/miniconda/bin:$PATH
RUN wget https://repo.anaconda.com/miniconda/Miniconda3-py38_4.10.3-Linux-x86_64.sh
RUN sh Miniconda3-py38_4.10.3-Linux-x86_64.sh -b -p /opt/miniconda && \
    /opt/miniconda/bin/conda clean -tipsy && \
    ln -s /opt/miniconda/etc/profile.d/conda.sh /etc/profile.d/conda.sh && \
    echo ". /opt/miniconda/etc/profile.d/conda.sh" >> ~/.bashrc && \
    echo "conda activate /opt/conda-env" >> ~/.bashrc


RUN /opt/miniconda/bin/conda update conda

## Environment ##
RUN /opt/miniconda/bin/conda create --prefix /opt/conda-env python=3.8
RUN /bin/bash -c "source /opt/miniconda/etc/profile.d/conda.sh"
# RUN conda env list
RUN /bin/bash -c "source activate /opt/conda-env"

RUN mv /var/lang/bin/python3.8 /var/lang/bin/python3.8-clean && ln -sf /opt/conda-env/bin/python /var/lang/bin/python3.8

# Install Libraries
RUN /opt/conda-env/bin/python3.8 -m pip install -r requirements.txt
RUN /opt/conda-env/bin/python3.8 -m pip install --upgrade pip
RUN /opt/miniconda/bin/conda install -c conda-forge opencv
RUN /opt/conda-env/bin/python3.8 -m pip install awslambdaric
RUN /opt/conda-env/bin/python3.8 -m pip install boto3
RUN /opt/conda-env/bin/python3.8 -m pip install matplotlib
RUN /opt/conda-env/bin/python3.8 -m pip install mediapipe
RUN /opt/miniconda/bin/conda install -c conda-forge librosa
RUN /opt/conda-env/bin/python3.8 -m pip install soundfile
RUN /opt/miniconda/bin/conda update conda
RUN cat /lambda-entrypoint.sh
# RUN ls /var/runtime

ENV LAMBDA_TASK_ROOT=/var/task

ENV PYTHONPATH "/opt/conda-env/lib/python3.8/site-package"
COPY lambda-entrypoint.sh /lambda-entrypoint.sh
RUN chmod 755 /lambda-entrypoint.sh

COPY pthread_shim.so /opt/pthread_shim.so
RUN mkdir /tmp/numba-cache
RUN mkdir /tmp/matplotlib
ENV NUMBA_CACHE_DIR "/tmp/numba-cache"
ENV MPLCONFIGDIR "/tmp/matplotlib"
RUN chmod 755 -R /tmp/

# RUN ls

## Check Installation and Version of Libraries
RUN /opt/conda-env/bin/python3.8 -c "import boto3; print(boto3.__version__)"
RUN /opt/conda-env/bin/python3.8 -c "import mediapipe as mp;"
RUN /opt/conda-env/bin/python3.8 -c "import cv2; print(cv2.__version__)"
RUN /opt/conda-env/bin/python3.8 -c "import librosa; print(librosa.__version__)"
RUN /opt/conda-env/bin/python3.8 -c "import numpy; print(numpy.__version__)"
RUN /opt/conda-env/bin/python3.8 -c "import matplotlib; print(matplotlib.__version__)"

ENTRYPOINT ["/lambda-entrypoint.sh"]
CMD ["main.lambda_handler"]
