BACKEND

to enter virtual environment

    capstone-2022-15/src/back/backend> python -m venv {venv_name}
    capstone-2022-15/src/back/backend> source {venv_name}/bin/activate

to install packages

    (venv) capstone-2022-15/src/back/backend? pip install -r requirements/dev.txt


django

    (venv)capstone-2022-15/src/back/backend> python3 manage.py runserver


sqlite3 db, table

    (venv) python3 manage.py dbshell
    (venv) .tables

sqlite3 table column name
    
    (venv) pragma table_info({table_name});

