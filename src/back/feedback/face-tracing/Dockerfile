FROM public.ecr.aws/lambda/python:3.8

RUN yum update && yum install -y wget && yum clean all
RUN yum install mesa-libGL -y
RUN pip freeze > requirements.txt

ENV PATH /opt/miniconda/bin:$PATH
RUN wget https://repo.anaconda.com/miniconda/Miniconda3-py38_4.10.3-Linux-x86_64.sh
RUN sh Miniconda3-py38_4.10.3-Linux-x86_64.sh -b -p /opt/miniconda && \
    /opt/miniconda/bin/conda clean -tipsy && \
    ln -s /opt/miniconda/etc/profile.d/conda.sh /etc/profile.d/conda.sh && \
    echo ". /opt/miniconda/etc/profile.d/conda.sh" >> ~/.bashrc && \
    echo "conda activate /opt/conda-env" >> ~/.bashrc

COPY environment.yml /tmp/environment.yml

RUN /opt/miniconda/bin/conda update conda

## Environment ##
RUN /opt/miniconda/bin/conda env create --file /tmp/environment.yml --prefix /opt/conda-env
RUN /bin/bash -c "source /opt/miniconda/etc/profile.d/conda.sh"
RUN conda env list
RUN /bin/bash -c "source activate /opt/conda-env"

RUN /opt/conda-env/bin/python3.8 -m pip install --upgrade pip
RUN /opt/miniconda/bin/conda install -c conda-forge opencv
RUN /opt/miniconda/bin/conda install -c conda-forge dlib
RUN /opt/conda-env/bin/python3.8 -m pip install awslambdaric
RUN /opt/conda-env/bin/python3.8 -m pip install boto3

RUN /opt/conda-env/bin/python3.8 -m pip install -r requirements.txt
RUN mv /var/lang/bin/python3.8 /var/lang/bin/python3.8-clena && ln -sf /opt/conda-env/bin/python /var/lang/bin/python3.8
COPY face_tracing.py /opt/my-code/face_tracing.py

ENV PYTHONPATH "/opt/conda-env/lib/python3.8/site-package:/opt/my-code"
RUN /opt/miniconda/bin/conda update conda
RUN cat /lambda-entrypoint.sh
RUN ls /var/runtime
## check python
RUN yum install which -y
RUN which python

COPY lambda-entrypoint.sh /lambda-entrypoint.sh
RUN chmod 755 /lambda-entrypoint.sh
RUN mkdir /opt/extensions
ENV LAMBDA_TASK_ROOT=/var/task

COPY shape_predictor_68_face_landmarks.dat /opt/my-code/shape_predictor_68_face_landmarks.dat

ENTRYPOINT ["/lambda-entrypoint.sh"]
CMD ["face_tracing.lambda_handler"]

