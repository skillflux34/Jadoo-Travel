from tortoise import fields
from tortoise.models import Model

class Booking(Model):
    id = fields.IntField(pk=True)

    user = fields.ForeignKeyField('models.User', related_name='bookings')
    trip = fields.ForeignKeyField('models.Trip', related_name='bookings')

    status = fields.CharField(max_length=20, default="pending")
    created_at = fields.DatetimeField(auto_now_add=True)

    class Meta:
        table = "bookings"

