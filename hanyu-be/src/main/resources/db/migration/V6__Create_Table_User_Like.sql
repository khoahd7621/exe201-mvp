CREATE TABLE IF NOT EXISTS hu_user_like_map
(
        id                          UUID                    NOT NULL CONSTRAINT hu_user_like_map_pk PRIMARY KEY,
        user_id                     UUID                    NOT NULL,
        comment_id                  UUID                    NOT NULL
);