CREATE TABLE  "users"(
    "user_id"  PRIMARY KEY,
    "phone" VARCHAR NOT NULL,
    "email" VARCHAR UNIQUE NOT NULL,
    "password" VARCHAR NOT NULL,
    "salt" VARCHAR NOT NULL,
    "user_type" VARCHAR NOT NULL,
    "first_name" VARCHAR ,
    "last_name" VARCHAR,
    "profile_pic" text,
    "verification_code" integer,
    "expiry" timestamptz,
    "verified" boolean,
    "created_at" timestamptz NOT NULL DEFAULT (now())
)

CREATE INDEX ON "users" ("phone")