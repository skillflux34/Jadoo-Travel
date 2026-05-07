from dotenv import load_dotenv
import os

load_dotenv()

TORTOISE_ORM = {
    "connections": {
        "default": "postgres://postgres:12345678@localhost:5432/jt_db"
    },

    "apps": {
        "models": {
            "models": [
                "models.user_model",
                "models.trip_model",
                "models.booking_model",
                "aerich.models"
            ],
            "default_connection": "default"
        },
    }
}


SMTP_HOST = os.getenv("SMTP_SERVER")
SMTP_PORT = int(os.getenv("SMTP_PORT"))
SMTP_USER = os.getenv("SMTP_USERNAME")
SMTP_PASS = os.getenv("SMTP_PASSWORD")
SMTP_FROM = os.getenv("FROM_EMAIL")

