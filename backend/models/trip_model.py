from tortoise import fields
from tortoise.models import Model

class Trip(Model):
    id = fields.IntField(pk=True)
    title = fields.CharField(max_length=255)
    destination = fields.CharField(max_length=100)
    price = fields.DecimalField(max_digits=10, decimal_places=2)
    start_date = fields.DateField()
    end_date = fields.DateField()
    image_url = fields.CharField(max_length=500)
    created_at = fields.DatetimeField(auto_now_add=True)

    class Meta:
        table = "trips"

