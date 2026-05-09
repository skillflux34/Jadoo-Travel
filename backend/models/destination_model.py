from tortoise import fields
from tortoise.models import Model

class FeaturedDestination(Model):
    id = fields.IntField(pk=True)
    title = fields.CharField(max_length=255)
    price = fields.CharField(max_length=50)
    days = fields.CharField(max_length=100)
    image_url = fields.CharField(max_length=500)
    created_at = fields.DatetimeField(auto_now_add=True)

    class Meta:
        table = "featured_destinations"

