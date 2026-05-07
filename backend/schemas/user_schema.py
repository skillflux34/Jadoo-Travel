from pydantic import BaseModel, EmailStr

class UserSignUp(BaseModel):
    username: str
    email: str
    password: str

class UserLogin(BaseModel):
    email: str
    password: str

class VerifyOTP(BaseModel):
    email: EmailStr
    otp: str
