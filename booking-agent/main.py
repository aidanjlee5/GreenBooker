#builtin
import os

#external
import asyncio
from fastapi import FastAPI, HTTPException
from supabase import create_client, Client


#internal
from booker import generate_itinerary, TripRequest
from supabase_client import insert_itinerary


url: str = os.getenv("PYTHON_SUPABASE_URL")
key: str = os.getenv("PYTHON_SUPABASE_ANON_KEY")
if not url or not key:
    raise ValueError("SUPABASE_URL or SUPABASE_KEY is not set in the environment file.")
supabase: Client = create_client(url, key)

app = FastAPI()

@app.post("/handle-new-row")
async def handle_new_row(data: TripRequest):
    prompt = (f"This user is looking to travel from {data.leaving_from} to {data.going_to} from {data.departure_date} to {data.return_date}. They have a budget of {data.budget_range} and are interested in {data.preferred_activities}, where all activities should be family-friendly: {data.family_friendly}.")
    try:
        new_itinerary = await generate_itinerary(prompt)
        sample_insertion = {
            "id": data.id,
            "user_id": data.user_id,
            "Desination": new_itinerary["Destination"],
            "Description": new_itinerary["Description"],
            "Dates": new_itinerary["Dates"],
            "Budget": new_itinerary["Budget"],
            "Itinerary": new_itinerary["Itinerary"]
        }
        return await insert_itinerary(sample_insertion)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


async def main():
    data = await asyncio.to_thread(handle_new_row)

if __name__ == "__main__":
    asyncio.run(main())