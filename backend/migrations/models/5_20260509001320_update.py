from tortoise import BaseDBAsyncClient

RUN_IN_TRANSACTION = True


async def upgrade(db: BaseDBAsyncClient) -> str:
    return """
        CREATE TABLE IF NOT EXISTS "featured_destinations" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "title" VARCHAR(255) NOT NULL,
    "price" VARCHAR(50) NOT NULL,
    "days" VARCHAR(100) NOT NULL,
    "image_url" VARCHAR(500) NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);"""


async def downgrade(db: BaseDBAsyncClient) -> str:
    return """
        DROP TABLE IF EXISTS "featured_destinations";"""


MODELS_STATE = (
    "eJztmltv2zYUgP+K4acO8ILWi9Nib/IlqNc4HhJnG1oUAi3RMhGJUimqiVH4v++QkizqOm"
    "uzUqvTm3V4jkR+OuS5yN/6jmti27948DHr/9r71qfIwfAjJR/0+sjzEqkQcLS2pWIQa6x9"
    "zpDBQbZBto9BZGLfYMTjxKUgpYFtC6FrgCKhViIKKPkSYJ27FuZbOY9Pn0FMqImfsR9feo"
    "/6hmDbTE2TmOLZUq7znSdlc8qvpaJ42lo3XDtwaKLs7fjWpQdtQrmQWphihjgWt+csENMX"
    "s4tWGa8onGmiEk5RsTHxBgU2V5Z7JAPDpYIfzMaXC7TEU34evrl8e/nul6vLd6AiZ3KQvN"
    "2Hy0vWHhpKArer/l6OI45CDYkx4SbemvydozfZIlaMT7XJQISpZyHGyKooxoIEY+I6J+Lo"
    "oGfdxtTiW7h88/p1BbU/tLvJe+3uFWj9JFbjgjuHPn4bDQ3DMYE2QYkdROw6HA8Gp4HYuC"
    "s2j9BDvv/ksoK9XE5RtWmnNw5HoyNQglYpSjmWRslcu9amjvVfDuEhYpwG4jHuOCz3xmHO"
    "GYmvf8WMwP0K/HHsAi9ES+JL2jKDdA2mTTGtG3EzSCsQjpfLGzFrx/e/2FIwX2VYPizGM9"
    "jyEjEoEY7VGJSAdblXxzMj9X/lmNER+N229tURTnlV6pNXWZcEFDp+9gjb5QFOgQInDi6F"
    "qFhmWJqR6UX84yzJVqBczRez+5W2+D3loVNtNRMjQyndZaQ57oeb9P6cr973xGXv4/J2Jo"
    "G5PreYfGKit/rYF3NCAXd16j7pyFSXHYtj0V7krptHJQsTgjUyHp8QM/XUSPLG4bB4BCh+"
    "wQkUWV5/uMM2kjDzbzbK3sfhXc4zGO5jX42lkXdJYO7QLSOWH3KGTlaCKLLkrMWzxZMiIi"
    "uYaL+gzpHyQVWdA4vx/K7QaVuhwwmvlxAdDLqk8gARZsYJPRw2x6LMmLUTaDMFDyNGgVdO"
    "sUEcZJcUPLFNNoqHRheR8XkyrUA4nU3mC+0GMA2GmRwypnuZA+hzxLgu8pbijKgYYdqqKh"
    "tqH0VIb7KNCWrWJqTa/Oh8YLdYWA9YreZNyqidJ9roqBNtVHGijfInmsGwWLKOeN0SJW15"
    "ghLlewCGNZhLau+iBKklNUuUy3UlyzmXLDGRgqpFgVVeuKjvpatd2lS7QLrCg4L9VB6dEo"
    "sX7Od6kDREXnimLd0uOP1AwUl9saIpo9c6XhSLfz5jzuT9neSYSX/7rQdNsfg/QculQWmG"
    "eYDXLsPEoh/wTnKcw4wQLSzaM3+vOD9+ZakOiBl6OgR51TVgebAoHJbuE+1+ok1n/dx2PQ"
    "G1uFnbXmrKKVRMrTzhbjLVvIZgFzBsTpXGXUHaWaRWmYJuIgNd6Qh2+Wjr8tGul36CXnpJ"
    "67fijy4lfd+WQBwd12yq6DXlvkagXa2iKNZvJ79Gvj90rc+u9dlVl4P/1vpsMhPTMJz626"
    "LkKxqpzLdQotMlWC1KsL5i5tf8xq6YtPNIbiTJElujBsRIvZ0AG0kQ4Ikc04KA9tv98rYk"
    "mCUmGZAPFBb4ySQGH/Rs4vPP54m1gqJYdSpoxfBeLbS/slwnN8txNhqJG4yLWkovGV72fw"
    "OtU6aL"
)
