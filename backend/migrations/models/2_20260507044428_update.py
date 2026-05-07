from tortoise import BaseDBAsyncClient

RUN_IN_TRANSACTION = True


async def upgrade(db: BaseDBAsyncClient) -> str:
    return """
        ALTER TABLE "user" ADD "role" VARCHAR(20) NOT NULL DEFAULT 'user';"""


async def downgrade(db: BaseDBAsyncClient) -> str:
    return """
        ALTER TABLE "user" DROP COLUMN "role";"""


MODELS_STATE = (
    "eJztll1v2jAUhv8KylUndVWbUVrtDihTmQpMbdimVlVkEhMsHDuNnbWo4r/Px0nIBwTBBG"
    "uRepe8fo99zpPj2K+Gz11MxclQ4ND4Wns1GPKxeijoxzUDBUGmgiDRiGpjlDpGQobIkUob"
    "IyqwklwsnJAEknCmVBZRCiJ3lJEwL5MiRp4ibEvuYTnReTw8KpkwF79gkb4GU3tMMHULaR"
    "IX1ta6LWeB1rpMftNGWG1kO5xGPsvMwUxOOFu4CZOgepjhEEkM08swgvQhu6TKtKI408wS"
    "p5iLcfEYRVTmyt2QgcMZ8FPZCF2gB6t8Ns/qF/XLL436pbLoTBbKxTwuL6s9DtQE+pYx1+"
    "NIotihMWbc4Kvp5yV67QkKV+PLx5QgqtTLEFNk6yimQoYxa50dcfTRi00x8+REvZ6dnq6h"
    "9rN5275u3h4p1yeohqt2jnu8nwyZ8RigzVBiHxG6DcdFwG4g7r0V948wQEI883DFXq6mmI"
    "85zG40z883QKlclSj1WBFlyOlWmzr1/z+EixNjNxA3aUezuhvNpWYkwv6DQ6LmW9GPLa54"
    "IVZxvhQjS0hHKnRfTLc9cUtI1yBsDQY3kLUvxBPVQtcqsRz2Wh215TViZSIS58+gDCyXwT"
    "admdj/qTGTX+Cbbe3GBk3ZqOzJRrklFQobvwQknC0DvFIUJPFxJcRcZImlm4SepA/vkuwa"
    "lFa317mzmr0fhQ69alodGDG1OiupS9wXk9R+da3rGrzW7gf9jgbGhfRCvWLms+4NyAlFkt"
    "uMP9vIzZedyqk0h7vreJq7hYEwQs70GYWuvTTCTV7lXR7yTb+sIIY8/R2AJuSZ3OSb6s/k"
    "TIwVd/xkZO0tH2Wej3v+Ad3z1XkkIKUt/ru5kI971QIkbI0tICb2wwS4lzu+WlHieA8WIX"
    "6/G/RXQ8yFlEAOmSrwwSWOPK5RIuTj+8S6hiJUXTi1UnhHvebvMtf2zaBVPo5ggpZi/KbH"
    "y/wvR0zPjw=="
)
