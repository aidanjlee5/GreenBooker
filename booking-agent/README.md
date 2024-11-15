.venv\Scripts\Activate

pip install -r requirements.txt

pip freeze > requirements.txt


# before 15.1.0
virtualenv --no-site-packages --distribute .env &&\
    source .env/bin/activate &&\
    pip install -r requirements.txt

# after deprecation of some arguments in 15.1.0
virtualenv .env && source .env/bin/activate && pip install -r requirements.txt