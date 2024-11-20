#builtin
import os

#external
from pydantic import BaseModel
from dotenv import load_dotenv
from supabase import create_client, Client

#internal

#This file is used to store all the supabase functions 

load_dotenv(".env.local")

url: str = os.getenv("PYTHON_SUPABASE_URL")
key: str = os.getenv("PYTHON_SUPABASE_ANON_KEY")
if not url or not key:
    raise ValueError("SUPABASE_URL or SUPABASE_KEY is not set in the environment file.")
supabase: Client = create_client(url, key)

async def insert_itinerary(data: dict):
    supabase.table("itinerary").insert(data).execute()

async def fetch_input():
    supabase.table("input").select("*").execute()