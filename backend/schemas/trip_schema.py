from pydantic import BaseModel
from datetime import date


class TripCreateSchema(BaseModel):
    title: str
    destination: str
    price: float
    start_date: date
    end_date: date
    image_url: str


class TripResponseSchema(TripCreateSchema):
    id: int

    class Config:
        from_attributes = True

