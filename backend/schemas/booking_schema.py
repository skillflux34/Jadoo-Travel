from pydantic import BaseModel

class CreateBookingSchema(BaseModel):
    trip_id: int

class BookingStatusUpdate(BaseModel):
    status: str

class BookingResponse(BaseModel):
    id: int
    user_name: str
    user_email: str
    trip_name: str
    status: str

    class Config:
        from_attributes = True

