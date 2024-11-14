import os
from fastapi import FastAPI
from pydantic import BaseModel, Field
import openai
from dotenv import load_dotenv

load_dotenv('.env.local')

OPEN_AI_API_KEY = os.getenv('OPEN_AI_API_KEY')

openai.api_key = OPEN_AI_API_KEY

class ItineraryGeneration(BaseModel):
    Location: str
    Description: str
    Dates: dict
    Budget: str
    Itinerary: list

app = FastAPI()

@app.get("/")
def read_itinerary_request():
    

@app.post("/")
def generate_itinerary():
    data = request.json
    location = data.get("Location")
    description = data.get("Description")
    start_date = data.get("Start")
    end_date = data.get("End")
    budget = data.get("Budget")
    
    prompt = f"Generate an itinerary for a trip to {location} from {start_date} to {end_date} with a budget of {budget}. Description: {description}."
    
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "You are an expert in generating travel itineraries based on user preferences."},
            {"role": "user", "content": prompt}
        ]
    )
    
    itinerary_data = response['choices'][0]['message']['content']
    
    itinerary = ItineraryGeneration(
        Location=location,
        Description=description,
        Dates={"Start": start_date, "End": end_date},
        Budget=budget,
        Itinerary=[itinerary_data]
    )
    
    return jsonify(itinerary.dict())

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)