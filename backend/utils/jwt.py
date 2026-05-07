from jose import jwt
from datetime import datetime, timedelta

SECRET_KEY = "sohaib-khan"
ALGORITHM = "HS256"

def create_token(data: dict):
    to_encode = data.copy()
    to_encode.update(
        {
            "exp": datetime.utcnow() + timedelta(minutes=60)
        }
    )
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

