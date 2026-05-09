from fastapi import HTTPException
from models.destination_model import FeaturedDestination

async def add_featured_card(data):
    new_card = await FeaturedDestination.create(
        title = data.title,
        price = data.price,
        days = data.days,
        image_url = data.image_url
    )
    return new_card

async def update_featured_card(card_id: int, data):
    card = await FeaturedDestination.get_or_none(id=card_id)

    if not card:
        raise HTTPException(status_code=404, detail="Destination not found")
    
    card.title = data.title
    card.price = data.price
    card.days = data.days
    card.image_url = data.image_url

    await card.save()
    return card

async def delete_featured_card(card_id: int):
    card = await FeaturedDestination.get_or_none(id=card_id)

    if not card:
        raise HTTPException(status_code=404, detail="Destination not found")
    
    await card.delete()
    return {"Destination Deleted Successfully"}

async def get_featured_cards():
    return await FeaturedDestination.all().order_by("-created_at").limit(3)

