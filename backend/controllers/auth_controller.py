from models.user_model import User
from utils.hash import hash_password, verify_password
from utils.jwt import create_token
from utils.email import send_otp_email
from utils.otp import generate_otp, otp_expiry_time
from datetime import datetime, timezone
from fastapi import HTTPException


async def signup(data):
    existing = await User.filter(email=data.email).first()

    if existing:
        raise HTTPException(status_code=400, detail="User already exists!")
    
    otp = generate_otp()
    
    user = await User.create(
        username = data.username,
        email = data.email,
        password = hash_password(data.password),
        otp = otp,
        otp_expiry = otp_expiry_time()
    )

    send_otp_email(user.email, otp)

    return {"message": "User Signed Up. Verification OTP sent to email."}


async def login(data):
    user = await User.filter(email=data.email).first()

    if not user:
        raise HTTPException(status_code=401, detail="User does not exist.")

    if not user.is_verified:
        raise HTTPException(status_code=401, detail="Please verify your account first!")

    if not verify_password(data.password, user.password):
        raise HTTPException(status_code=401, detail="Invalid Credentials")

    token = create_token({ 
        "user_id": user.id,
        "role": user.role 
    })

    return {
        "message": "User logged in successfully",
        "access_token": token,
        "user_id": user.id,
        "role": user.role,
        "username": user.username
    }


async def verify_otp(email: str, otp: str):
    user = await User.filter(email=email).first()

    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    if user.otp != otp:
        raise HTTPException(status_code=400, detail="Invalid OTP!")
    
    if user.otp_expiry < datetime.now(timezone.utc):
        raise HTTPException(status_code=400, detail="OTP expired!")
    
    user.is_verified = True
    user.otp = None
    await user.save()

    return {"message": "Account verified successfully."}

