from tortoise import BaseDBAsyncClient

RUN_IN_TRANSACTION = True


async def upgrade(db: BaseDBAsyncClient) -> str:
    return """
        CREATE TABLE IF NOT EXISTS "user" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "username" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL UNIQUE,
    "password" VARCHAR(255) NOT NULL,
    "is_verified" BOOL NOT NULL DEFAULT False,
    "otp" VARCHAR(6),
    "otp_expiry" TIMESTAMPTZ
);
CREATE TABLE IF NOT EXISTS "aerich" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "version" VARCHAR(255) NOT NULL,
    "app" VARCHAR(100) NOT NULL,
    "content" JSONB NOT NULL
);"""


async def downgrade(db: BaseDBAsyncClient) -> str:
    return """
        """


MODELS_STATE = (
    "eJztlm9v2jAQxr8KyqtO6qo2o7TaO6BMZSowtWGbWlWRSUyw6thp7AxQxXevz0nIHyCCqa"
    "hF6rvk8XPx3S+X+F4Mn7uYipOhwKHxvfZiMORjdVHQj2sGCoJMBUGiEdXGKHWMhAyRI5U2"
    "RlRgJblYOCEJJOFMqSyiFETuKCNhXiZFjDxH2Jbcw3Ki83h4VDJhLp5hkd4GT/aYYOoW0i"
    "Qu7K11W84DrXWZ/KGNsNvIdjiNfJaZg7mccLZ0EyZB9TDDIZIYHi/DCNKH7JIq04riTDNL"
    "nGIuxsVjFFGZK3dLBg5nwE9lI3SBHuzy1TyrX9QvvzXql8qiM1kqF4u4vKz2OFAT6FvGQq"
    "8jiWKHxphxg7emr1fotScoXI8vH1OCqFIvQ0yRVVFMhQxj1jpvxNFHM5ti5smJuj07Pa2g"
    "9rt5275u3h4p1xeohqt2jnu8nyyZ8RqgzVBiHxG6C8dlwNtA3Hsr7h9hgISY8nDNt7yZYj"
    "7mMLvRPD/fAqVybUSp14ooibD/4ZCoJ66h2eKcYsQ2/B2LkSWmIxW6L6i7nhclqhUQW4PB"
    "DWTtC/FMtdC1SjCHvVZHNaxmrExE4vwfNAPLZbBLeyb2/+rM5AN+t8ZsbNGWjY1N2Si3pE"
    "Jh41lAwvkqwCtFQRIfb4SYiyyxdJPQk/TiQ5KtQGl1e507q9n7VejQq6bVgRVTq/OSusJ9"
    "+ZDan651XYPb2v2g39HAuJBeqHfMfNa9ATmhSHKb8amN3HzZqZxKC5i8xk+5GQKEEXKepi"
    "h07ZUVbvJN3tUl3/TLCmLI0+8BaEKeyRzaVH8mZ2KsmVCTlcoZFWWezyn1gKZUdR4JSGmH"
    "/24u5HMqWIKET2MHiIn9MAHuZUJVO0ocf4NFiD/vBv31EHMhJZBDpgp8cIkjj2uUCPn4Mb"
    "FWUISqC6dWCu+o1/xb5tq+GbTKxxE8oKUYv+vxsngFT+lp0w=="
)
