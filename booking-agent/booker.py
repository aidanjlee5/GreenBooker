#builtin
import os

#external
from fastapi import FastAPI
from pydantic import BaseModel
import openai
from openai import OpenAI
from dotenv import load_dotenv
from typing import Dict
import httpx


#internal


#This file is used to generate itineraries using the user's preferences and the OpenAI API. The itinerary is then stored in the Supabase database.

load_dotenv('.env.local')

OPEN_AI_API_KEY: str = os.getenv('OPENAI_API_KEY')
if not OPEN_AI_API_KEY:
    raise ValueError("OPEN_AI_API_KEY is not set in the environment file.")

openai.api_key = OPEN_AI_API_KEY

app = FastAPI()


class ItineraryFormat(BaseModel):
    Destination: str
    Description: str
    Dates: dict
    Budget: int
    Itinerary: str

class TripRequest(BaseModel):
    id: str
    user_id: str
    going_to: str
    leaving_from: str
    departure_date: str
    return_date: str
    preferred_activities: str
    family_friendly: bool
    budget_range: str


async def generate_itinerary(prompt: str) -> Dict:
    client = OpenAI(openai.api_key)
    try:
        completion = client.beta.chat.completions.parse(
            model="gpt-4o-2024-08-06",
            messages = [
                {"role": "system", "content": "You are an informative expert in international travel, create a short description and itinerary for any given trips"},
                {"role": "user", "content": prompt},
            ],
            response_format=ItineraryFormat,
        )
        return completion.choices[0].message.parsed
    except Exception as e:
        raise RuntimeError(f"Itinrary generation failed: {e}")


# @app.post("/")
# def generate_itinerary():
#     data = response
#     location = data.get("Location")
#     description = data.get("Description")
#     start_date = data.get("Start")
#     end_date = data.get("End")
#     budget = dat  a.get("Budget")
    
#     prompt = f"Generate an itinerary for a trip to {location} from {start_date} to {end_date} with a budget of {budget}. Description: {description}."
    
#     response = openai.ChatCompletion.create(
#         model="gpt-4",
#         messages=[
#             {"role": "system", "content": "You are an expert in generating travel itineraries based on user preferences."},
#             {"role": "user", "content": prompt}
#         ]
#     )
    
#     itinerary_data = response['choices'][0]['message']['content']
    
#     itinerary = ItineraryGeneration(
#         Location=location,
#         Description=description,
#         Dates={"Start": start_date, "End": end_date},
#         Budget=budget,
#         Itinerary=[itinerary_data]
#     )
    
#     return jsonify(itinerary.dict())

# itinerary_request = read_itinerary_request()
# post_itinerary(itinerary_request)

