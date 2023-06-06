CREATE TABLE IF NOT EXISTS hu_word_note
(
    id                          BIGSERIAL               NOT NULL CONSTRAINT hfu_word_note_pk PRIMARY KEY,
    user_id                     UUID                    NOT NULL,
    word_id                     INTEGER                 NOT NULL,
    note                     VARCHAR(100)            NOT NULL
);

CREATE INDEX IF NOT EXISTS hu_user_id_index ON hu_word_note(user_id);
