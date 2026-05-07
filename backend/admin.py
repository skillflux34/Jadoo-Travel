from tortoise import Tortoise
import asyncio

from config import TORTOISE_ORM
from models.user_model import User


async def make_admin():
    await Tortoise.init(config=TORTOISE_ORM)

    user = await User.filter(email="skillflux34@gmail.com").first()

    if not user:
        print("User not found")
        return

    user.role = "admin"
    await user.save()

    print(f"{user.email} is now admin")

    await Tortoise.close_connections()


asyncio.run(make_admin())

