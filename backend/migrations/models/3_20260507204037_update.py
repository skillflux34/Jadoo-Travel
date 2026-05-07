from tortoise import BaseDBAsyncClient

RUN_IN_TRANSACTION = True


async def upgrade(db: BaseDBAsyncClient) -> str:
    return """
        CREATE TABLE IF NOT EXISTS "trips" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "title" VARCHAR(255) NOT NULL,
    "destination" VARCHAR(100) NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "start_date" DATE NOT NULL,
    "end_date" DATE NOT NULL,
    "image_url" VARCHAR(500) NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);"""


async def downgrade(db: BaseDBAsyncClient) -> str:
    return """
        DROP TABLE IF EXISTS "trips";"""


MODELS_STATE = (
    "eJztmG1vmzAQx79KxKtO6qqWJWm1d3mamqlJppZuU6sKOeAQq2BT27SNqnz32Q6EhwAKU7"
    "KGqe/gfAd3P86+f/KmecSGLju5ZZBqXxtvGgYeFBcp+3FDA74fW6WBg6mrHIPIY8o4BRYX"
    "thlwGRQmGzKLIp8jgoUVB64rjcQSjgg7sSnA6CmAJicO5HOVx/2DMCNsw1fIolv/0Zwh6N"
    "qpNJEt363sJl/4yjbE/JtylG+bmhZxAw/Hzv6CzwleeyPMpdWBGFLAoXw8p4FMX2YXVhlV"
    "tMo0dlmlmIix4QwELk+UuyUDi2DJT2TDVIGOfMtn/ax53rz40m5eCBeVydpyvlyVF9e+Cl"
    "QExoa2VOuAg5WHwhhzk19NXW/Q680BzceXjMlAFKlnIUbIyihGhhhj3Do74uiBV9OF2OFz"
    "cXt2elpC7WfnunfZuT4SXp9kNUS086rHx+GSvlqTaGOU0APIrcJxHbAbiHtvxf0j9AFjL4"
    "Tm7OViismYenaj3mptgVJ4FaJUa2mUlLiVNnXk/+8QrifGbiBu0456cTfqG82ImPkMKRLP"
    "y+nHLhG8AC6YL+nIDNKpCN0X06oTN4O0BGF3MrmSWXuMPbnKMDQyLG9H3YHY8gqxcEIcJm"
    "dQDJZwv0pnhu5/1ZjhEfhuW7u9RVO2C3uynW1JgcKErz6ii02AfUGBIw8WQkxEZljaYehJ"
    "dHGQZEtQGsPR4MbojH6kOrTfMQZyRVfWRca6wX39kMavoXHZkLeNu8l4oIARxh2q3hj7GX"
    "eazAkEnJiYvJjATpYdmSPTUmrX2WNChUnDFFiPL4Da5sYK0UmR7+aSp3tZC8DAUd9B0pR5"
    "hkreEOi1HIWv7KUKX3wen31I/LpJfI54NSmwDviQU2uIIjOOMFCZVUCZCasn0P1IfYqsnK"
    "7sQwt5wC2Q+lFMdn6tgk7C4MNkWoKwP+gNR50rgelYz6iniG5zAyDjgHJTTux8LZCPMB1V"
    "pgPqR1EM9uxPcmxXJpSM+d/5iN3iQDOglf62SAXV80RrbXWitUpOtNbmiWZRKEs2Aa8qzt"
    "OROxDn7wFY1GBPsLsIBVJN1Hqo5Q5VrHegGHlzLUeuhyulgh3EPh+KvUaK/RlSVlFoJkLq"
    "eSTvRbXLrVEBYuheT4B7UenijRzinIH2/WYyLhhmcUgG5C0WBd7byOLHDRcx/nCYWEsoyq"
    "pTQyuCdzTq/M5y7V1NutlpJB/QFYzfdbws/wDpAI8P"
)
