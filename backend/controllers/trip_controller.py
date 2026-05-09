from models.trip_model import Trip
from fastapi import HTTPException

async def create_trip(data):
    try:
        trip = await Trip.create(
            title = data.title,
            destination = data.destination,
            price = data.price,
            start_date = data.start_date,
            end_date = data.end_date,
            image_url = data.image_url
        )
        return {
            "message": "Trip created successfully",
            "title": data.title, 
            "destination": data.destination
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


async def update_trip(trip_id: int, data):
    trip = await Trip.get_or_none(id=trip_id)

    if not trip:
        raise HTTPException(status_code=404, detail="Trip not found")
    
    trip.title = data.title
    trip.destination = data.destination
    trip.price = data.price
    trip.start_date = data.start_date
    trip.end_date = data.end_date
    trip.image_url = data.image_url

    await trip.save()

    return {"message": "Trip updated successfully", "trip": trip}
    

async def delete_trip(trip_id: int):
    trip = await Trip.get_or_none(id=trip_id)

    if not trip:
        raise HTTPException(status_code=404, detail="Trip not found")
    
    await trip.delete()

    return {"message": f"Trip {trip_id} deleted successfully."}


async def get_all_trips():
    return await Trip.all().order_by("created_at")


