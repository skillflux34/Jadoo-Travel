from fastapi import Depends, HTTPException
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from jose import jwt
from utils.jwt import SECRET_KEY, ALGORITHM

security = HTTPBearer()

async def check_admin(credentials: HTTPAuthorizationCredentials = Depends(security)):
    token = credentials.credentials
    
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])

        if payload.get("role") != "admin":
            raise HTTPException(status_code=403, detail="Admin access required")

        return payload
    
    except Exception:
        raise HTTPException(status_code=401, detail="Invalid Session")
    

async def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)):
    token = credentials.credentials

    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    
    except Exception:
        raise HTTPException(status_code=401, detail="Invalid Session")

