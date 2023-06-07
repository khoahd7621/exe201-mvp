CREATE TABLE IF NOT EXISTS hu_test_result
(
        id                          BIGSERIAL               NOT NULL CONSTRAINT hu_test_result_pk PRIMARY KEY,
        user_id                     UUID                    NOT NULL,
        test_id                     INTEGER                 NOT NULL,
        total_score                 INTEGER                 NOT NULL,
        real_score                  INTEGER                 NOT NULL,
        created_at                  TIMESTAMP               NOT NULL
);

CREATE TABLE IF NOT EXISTS hu_part_result
(
        id                          BIGSERIAL               NOT NULL CONSTRAINT hu_part_result_pk PRIMARY KEY,
        label                       VARCHAR(50)             NOT NULL,
        rate                        DOUBLE PRECISION        NOT NULL,
        test_result_id              BIGSERIAL               NOT NULL
);

CREATE TABLE IF NOT EXISTS hu_user_answer
(
        id                          BIGSERIAL               NOT NULL CONSTRAINT hu_user_answer_pk PRIMARY KEY,
        question_id                 INTEGER                 NOT NULL,
        answer                      VARCHAR(50),
        test_result_id              BIGSERIAL               NOT NULL
);

