import smtplib
from email.mime.text import MIMEText
from config import SMTP_FROM, SMTP_HOST, SMTP_PASS, SMTP_PORT, SMTP_USER

import traceback

def send_otp_email(to_email: str, otp: str):
    subject = "Your OTP Code"
    body = f"Your OTP is {otp}. It will expire in 5 minutes."

    msg = MIMEText(body)
    msg["Subject"] = subject
    msg["From"] = SMTP_FROM
    msg["To"] = to_email

    try:
        server = smtplib.SMTP(SMTP_HOST, SMTP_PORT)
        server.starttls()
        server.login(SMTP_USER, SMTP_PASS)
        server.send_message(msg)
        server.quit()

        print("OTP Email Sent!")

    except Exception as e:
        print("Email Error: ")
        traceback.print_exc()


def send_otp_mail(email, otp):
    print(f"Send OTP {otp} to {email}.")
