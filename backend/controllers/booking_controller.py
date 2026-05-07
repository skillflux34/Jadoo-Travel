from fastapi import HTTPException

from models.booking_model import Booking
from models.trip_model import Trip

async def get_all_bookings():
    bookings = await Booking.all().prefetch_related('user', 'trip')

    return [
        {
            "id": b.id,
            "user_name": b.user.username,
            "user_email": b.user.email,
            "user_trip": b.trip.title,
            "status": b.status
        } for b in bookings
    ]


async def get_user_bookings(user_id: int):
    bookings = await Booking.filter(user_id=user_id).prefetch_related('trip')

    return [
        {
            "id": b.id,
            "trip_name": b.trip.title,
            "status": b.status,
            "booked_at": b.created_at
        } for b in bookings
    ]


async def create_new_booking(user_id: int, trip_id: int):
    trip_exists = await Trip.exists(id=trip_id)

    if not trip_exists:
        raise HTTPException(status_code=404, detail="Trip not found")
    
    booking = await Booking.create(
        user_id = user_id,
        trip_id = trip_id,
        status = "Pending"
    )

    return {"message": "Booking request sent!", "booking_id": booking.id, "booking_status": booking.status}


async def update_booking_status(booking_id: int, new_status: str):
    booking = await Booking.get_or_none(id=booking_id)

    if not booking:
        raise HTTPException(status_code=404, detail="No Bookings")

    formatted_status = new_status.strip().capitalize()
    valid_statuses = ["Pending", "Confirmed", "Cancelled"]

    if formatted_status not in valid_statuses:
        raise HTTPException(status_code=400, detail="Invalid Status")
    
    booking.status = formatted_status
    await booking.save()

    return {"message": "Status updated", "booking_id": booking_id, "new_status": formatted_status}

