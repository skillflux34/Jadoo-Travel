from tortoise import BaseDBAsyncClient

RUN_IN_TRANSACTION = True


async def upgrade(db: BaseDBAsyncClient) -> str:
    return """
        CREATE TABLE IF NOT EXISTS "bookings" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "status" VARCHAR(20) NOT NULL DEFAULT 'pending',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "trip_id" INT NOT NULL REFERENCES "trips" ("id") ON DELETE CASCADE,
    "user_id" INT NOT NULL REFERENCES "user" ("id") ON DELETE CASCADE
);"""


async def downgrade(db: BaseDBAsyncClient) -> str:
    return """
        DROP TABLE IF EXISTS "bookings";"""


MODELS_STATE = (
    "eJztmm1v2zYQgP+KoU8dkAWtFqfFvskvQb3GcZE429CiEGiJkYlIlEpSTYzC/31HSrLeNW"
    "uwU6nzN+t4J949OpJ3TL5rnm9jl5/fc8y03wffNYo8DD9y8rOBhoIglUqBQCtXKYaJxooL"
    "hiwBsgfkcgwiG3OLkUAQn4KUhq4rhb4FioQ6qSik5GuITeE7WKyVH5+/gJhQGz9jnjwGj+"
    "YDwa6dc5PYcm4lN8UmULIZFVdKUc62Mi3fDT2aKgcbsfbpTptQIaUOppghgeXrBQul+9K7"
    "OMokosjTVCVyMWNj4wcUuiIT7p4MLJ9KfuANVwE6cpZf9TcXby/e/XZ58Q5UlCc7ydttFF"
    "4ae2SoCNwsta0aRwJFGgpjyk1+NfW7RG+8RqwaX9amABFcL0JMkDVRTAQpxjR1DsTRQ8+m"
    "i6kj1vD45vXrBmp/Grfj98btK9D6RUbjQzpHOX4TD+nRmESbosQeIm4bjjuDw0A8eioeH2"
    "GAOH/yWcVarqeYtelnNurD4R4oQasWpRrLo2S+22pRJ/ovh3B3YhwG4j7pqNdno15KRsLN"
    "b5gReF9FPo584IVozfmStywgXYHpsZi2PXELSBsQjhaLa+m1x/lXVwlmywLL+/loCkteIQ"
    "YlInD2DErB+iJok5mx+n9KzHgL/GFL+3KPpLyszcnLYkoCChM/B4RtygAnQEEQD9dCzFgW"
    "WNqx6Xnyo5NkG1AuZ/Pp3dKYf8xl6MRYTuWIrqSbgrTEffeSwV+z5fuBfBx8WtxMFTCfC4"
    "epGVO95SdN+oRC4ZvUfzKRnQ07ESeiraxdHx4zVZgUrJD1+ISYbeZG0i8Om8UjQOEVO1Bs"
    "efXhFrtIwSx/2bh6H0Vv6eZhuE1yNZHG2aWA+bpfR6w85OleUYIocpTXcm45U0xkCY5qFX"
    "2Okp819TkQTMBPjU7fGh1BRLuCaGdwKip3EMEzQehus9kXZcGsn0CP0/AwYlVk5QRbxENu"
    "TcOT2BRP8cjoPDbuJtMGhJPpeDY3rgHTmV6oIRO6FyWAXCAmTFm3VFdE1QjzVk3VUP8oQn"
    "lTvJigdmtCWZufnQ+sFgebIWt1eZMz6ueONtxrRxs27GjD8o5mMSxDNpFo26LkLQ/QovwI"
    "wBCDvaDuJi6QetKzxLXcqWXpcsuSEKnoWjKw6huX7Hc59S596l2gXBFhxXqqP51Sixe8zw"
    "2gaIizsKNXuqfD6Sc6nLIfVl7KmK22l4zFv+8xHfl+B9lm8n/7bQctY/F/glYqg/IMywCv"
    "fIaJQz/gjeI4A48QrWzaC/9e0T1+daUOiBl62h3y2dSA8CAoHLXuY+NubEymWmm5HoBacl"
    "nbX2qZXaiaWn3BfcxS08CMWGutotKMRxoLTZTqnMrMjm1lTWXmN8x4y5vdjEk/70COck0u"
    "l0YLiLF6PwEe5VocZhSYVhTpf9wtbmoK9NSkAPKeQoCfbWKJs4FLuPjSTawNFGXUuUI8gf"
    "dqbvxd5Dq+XoyKFbZ8waiqkHnJ42X7DxqzmZc="
)
