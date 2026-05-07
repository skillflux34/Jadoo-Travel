from tortoise import fields
from tortoise.models import Model

class User(Model):
    id = fields.IntField(pk=True)
    username =  fields.CharField(max_length=100)
    email = fields.CharField(max_length=100, unique=True)
    password = fields.CharField(max_length=255)

    role = fields.CharField(max_length=20, default="user")

    is_verified = fields.BooleanField(default=False)
    otp = fields.CharField(max_length=6, null=True)
    otp_expiry = fields.DatetimeField(null=True)

    class Meta:
        table = "user"