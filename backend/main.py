from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from tortoise.contrib.fastapi import register_tortoise
from config import TORTOISE_ORM
from utils.dependencies import check_admin, get_current_user

from schemas.user_schema import UserSignUp, UserLogin, VerifyOTP
from schemas.trip_schema import TripCreateSchema
from schemas.booking_schema import BookingStatusUpdate, CreateBookingSchema

from controllers.auth_controller import signup, login, verify_otp
from controllers.trip_controller import create_trip, get_all_trips,update_trip, delete_trip
from controllers.booking_controller import get_all_bookings, update_booking_status, create_new_booking, get_user_bookings

from fastapi import Depends


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


register_tortoise(
    app, 
    config=TORTOISE_ORM,
    generate_schemas=True,
    add_exception_handlers=True
)
