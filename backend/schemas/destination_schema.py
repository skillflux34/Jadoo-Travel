from pydantic import BaseModel

class DestinationSchema(BaseModel):
    title: str
    price: str
    days: str
    image_url: str

