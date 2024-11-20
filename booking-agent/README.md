# Commands for running the script
.venv\Scripts\Activate

pip install -r requirements.txt

pip freeze > requirements.txt


# Activation instructions for the virtual environment
*Bash or Unix-based shells*
# before 15.1.0
virtualenv --no-site-packages --distribute .env &&\
    source .env/bin/activate &&\
    pip install -r requirements.txt

# after deprecation of some arguments in 15.1.0
virtualenv .env && source .env/bin/activate && pip install -r requirements.txt

*PowerShell*
# before 15.1.0
virtualenv --no-site-packages --distribute .env ;
    source .env/bin/activate ;
    pip install -r requirements.txt

# after deprecation of some arguments in 15.1.0
virtualenv .env; .\.env\Scripts\Activate; pip install -r requirements.txt


Resources for local development for Supabase functions: 
https://supabase.com/docs/guides/local-development
https://supabase.com/docs/guides/ai/examples/openai

uvicorn main:app --reload

Get-Process | FindStr uvicorn 

Stop-Process -Id 14948  -Force
