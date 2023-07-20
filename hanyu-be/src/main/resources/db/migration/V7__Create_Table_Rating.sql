CREATE TABLE IF NOT EXISTS hu_rating
(
        id                          UUID                    NOT NULL CONSTRAINT hu_rating_pk PRIMARY KEY,
        user_id                     UUID                    NOT NULL,
        star                        INTEGER                 NOT NULL DEFAULT 0,
        description                 VARCHAR(100)            NOT NULL,
        created_at                  TIMESTAMP               NOT NULL DEFAULT now(),
        updated_at                  TIMESTAMP               NOT NULL DEFAULT now()
);

ALTER TABLE hu_rating ADD CONSTRAINT hu_rating_user_id_fk FOREIGN KEY (user_id) REFERENCES hu_user(id);