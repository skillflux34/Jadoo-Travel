from jose import jwt
from datetime import datetime, timedelta

SECRET_KEY = "sohaib-khan"
ALGORITHM = "HS256"

def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=60)
    to_encode.update({ "exp": expire, "type": "access" })
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

def create_refresh_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(days=30)
    to_encode.update({ "exp": expire, "type": "refresh" })
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

