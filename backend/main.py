from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from jose import JWTError, jwt

from tortoise.contrib.fastapi import register_tortoise
from config import TORTOISE_ORM
from utils.dependencies import check_admin, get_current_user
from utils.jwt import SECRET_KEY, ALGORITHM, create_access_token

from schemas.user_schema import UserSignUp, UserLogin, VerifyOTP
from schemas.trip_schema import TripCreateSchema
from schemas.booking_schema import BookingStatusUpdate, CreateBookingSchema
from schemas.destination_schema import DestinationSchema

from controllers.auth_controller import signup, login, verify_otp
from controllers.trip_controller import create_trip, get_all_trips,update_trip, delete_trip
from controllers.booking_controller import get_all_bookings, update_booking_status, create_new_booking, get_user_bookings
from controllers.destination_controller import add_featured_card, get_featured_cards, update_featured_card, delete_featured_card


app = FastAPI(title="Jadoo Travels")

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.post("/signup")
async def signup_user(user: UserSignUp):
    return await signup(user)

@app.post("/login")
async def login_user(user: UserLogin):
    return await login(user)

@app.post("/verify-otp")
async def otp_verify(data: VerifyOTP):
    return await verify_otp(data.email, data.otp)

@app.post("/trips", dependencies=[Depends(check_admin)])
async def add_trip(trip_data: TripCreateSchema):
    return await create_trip(trip_data)

@app.put("/trips/{trip_id}", dependencies=[Depends(check_admin)])
async def edit_trip(trip_id: int, trip_data: TripCreateSchema):
    return await update_trip(trip_id, trip_data)

@app.delete("/trips/{trip_id}", dependencies=[Depends(check_admin)])
async def trip_delete(trip_id: int):
    return await delete_trip(trip_id)

@app.get("/trips")
async def list_trips():
    return await get_all_trips()

@app.post("/bookings")
async def book_trip(data: CreateBookingSchema, user_data: dict = Depends(get_current_user)):
    return await create_new_booking(user_id=user_data["user_id"], trip_id=data.trip_id)

@app.get("/my-bookings")
async def my_bookings(user_data: dict = Depends(get_current_user)):
    return await get_user_bookings(user_id=user_data["user_id"])

@app.get("/admin/bookings", dependencies=[Depends(check_admin)])
async def view_bookings():
    return await get_all_bookings()

@app.patch("/admin/bookings/{booking_id}/status", dependencies=[Depends(check_admin)])
async def change_status(booking_id: int, data: BookingStatusUpdate):
    return await update_booking_status(booking_id, data.status)

@app.post("/featured-destinations", dependencies=[Depends(check_admin)])
async def create_featured_destinations(data: DestinationSchema):
    return await add_featured_card(data)

@app.get("/featured-destinations")
async def get_featured_destinations():
    return await get_featured_cards()

@app.put("/featured-destinations/{card_id}", dependencies=[Depends(check_admin)])
async def edit_featured_card(card_id: int, data: DestinationSchema):
    return await update_featured_card(card_id, data)

@app.delete("/featured-destinations/{card_id}", dependencies=[Depends(check_admin)])
async def remove_featured_card(card_id: int):
    return await delete_featured_card(card_id)


@app.post("/refresh-token")
async def refresh_access_token(refresh_token: str):
    try:
        payload = jwt.decode(refresh_token, SECRET_KEY, algorithms=[ALGORITHM])

        if payload.get("type") != "refresh":
            raise HTTPException(status_code=401, detail="Invalid token type")
        
        new_payload = {"sub": payload.get("sub"), "role": payload.get("role")}
        new_access_token = create_access_token(new_payload)

        return {"access_token": new_access_token, "token-type": "bearer"}
    
    except JWTError:
        raise HTTPException(status_code=401, detail="Refresh token expired or invalid")


register_tortoise(
    app, 
    config=TORTOISE_ORM,
    generate_schemas=True,
    add_exception_handlers=True
)
