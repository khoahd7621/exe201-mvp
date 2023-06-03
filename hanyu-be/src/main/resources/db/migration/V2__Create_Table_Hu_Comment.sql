CREATE TABLE IF NOT EXISTS hu_comment
(
    id                          UUID                   NOT NULL DEFAULT uuid_generate_v4() CONSTRAINT hu_comment_pk PRIMARY KEY,
    user_id                     UUID,
    title                       VARCHAR(60)            NOT NULL,
    content                     VARCHAR(100)           NOT NULL,
    parent_id                   UUID,
    like_number                 INTEGER,
    status                      VARCHAR(20)            NOT NULL,
    member_type                 VARCHAR(20)            NOT NULL,
    created_at                  TIMESTAMP              NOT NULL DEFAULT now(),
    updated_at                  TIMESTAMP              NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS hu_parent_id_status_index ON hu_comment(parent_id, status);
CREATE INDEX IF NOT EXISTS hu_member_type_index ON hu_comment(member_type);
CREATE INDEX IF NOT EXISTS hu_user_id_index ON hu_comment(user_id);