CREATE TABLE IF NOT EXISTS hu_user
(
    id                          UUID                   NOT NULL DEFAULT uuid_generate_v4() CONSTRAINT hu_user_pk PRIMARY KEY,
    name                        VARCHAR(60),
    email                       VARCHAR(60)            NOT NULL,
    phone                       VARCHAR(10),
    password                    VARCHAR(20)            NOT NULL,
    user_package                VARCHAR(20)            NOT NULL,
    status                      VARCHAR(20)            NOT NULL,
    role                        VARCHAR(20)            NOT NULL,
    short_description           VARCHAR(100),
    created_at                  TIMESTAMP              NOT NULL DEFAULT now(),
    updated_at                  TIMESTAMP              NOT NULL DEFAULT now(),
);

CREATE INDEX IF NOT EXISTS hu_user_email_password_index ON hu_user(email, password);