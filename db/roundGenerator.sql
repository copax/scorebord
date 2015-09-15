SELECT
    *
FROM
    (
        SELECT
            q.*,
            6 AS ROUND
        FROM
            (
                SELECT
                    id,
                    category_id,
                    answer,
                    question,
                    airdate,
                    insdate,
                    amount
                FROM
                    sb_question
                WHERE
                    category_id = 21
                AND amount = 100
                AND question not like '%Clue Crew%'
                AND id NOT IN
                    (
                        SELECT
                            id
                        FROM
                            sb_question_filtered)
                ORDER BY
                    rand() limit 1) q
        UNION
        SELECT
            q.*,
            6 AS ROUND
        FROM
            (
                SELECT
                    id,
                    category_id,
                    answer,
                    question,
                    airdate,
                    insdate,
                    amount
                FROM
                    sb_question
                WHERE
                    category_id = 21
                AND amount = 200
                AND question not like '%Clue Crew%'
                AND id NOT IN
                    (
                        SELECT
                            id
                        FROM
                            sb_question_filtered)
                ORDER BY
                    rand() limit 1) q
        UNION
        SELECT
            q.*,
            6 AS ROUND
        FROM
            (
                SELECT
                    id,
                    category_id,
                    answer,
                    question,
                    airdate,
                    insdate,
                    amount
                FROM
                    sb_question
                WHERE
                    category_id = 21
                AND amount = 300
                AND question not like '%Clue Crew%'
                AND id NOT IN
                    (
                        SELECT
                            id
                        FROM
                            sb_question_filtered)
                ORDER BY
                    rand() limit 1) q
        UNION
        SELECT
            q.*,
            6 AS ROUND
        FROM
            (
                SELECT
                    id,
                    category_id,
                    answer,
                    question,
                    airdate,
                    insdate,
                    amount
                FROM
                    sb_question
                WHERE
                    category_id = 21
                AND amount = 400
                AND question not like '%Clue Crew%'
                AND id NOT IN
                    (
                        SELECT
                            id
                        FROM
                            sb_question_filtered)
                ORDER BY
                    rand() limit 1) q
        UNION
        SELECT
            q.*,
            6 AS ROUND
        FROM
            (
                SELECT
                    id,
                    category_id,
                    answer,
                    question,
                    airdate,
                    insdate,
                    amount
                FROM
                    sb_question
                WHERE
                    category_id = 21
                AND amount = 500
                AND question not like '%Clue Crew%'
                AND id NOT IN
                    (
                        SELECT
                            id
                        FROM
                            sb_question_filtered)
                ORDER BY
                    rand() limit 1) q ) cat1
UNION
SELECT
    *
FROM
    (
        SELECT
            q.*,
            6 AS ROUND
        FROM
            (
                SELECT
                    id,
                    category_id,
                    answer,
                    question,
                    airdate,
                    insdate,
                    amount
                FROM
                    sb_question
                WHERE
                    category_id = 26
                AND amount = 100
                AND question not like '%Clue Crew%'
                AND id NOT IN
                    (
                        SELECT
                            id
                        FROM
                            sb_question_filtered)
                ORDER BY
                    rand() limit 1) q
        UNION
        SELECT
            q.*,
            6 AS ROUND
        FROM
            (
                SELECT
                    id,
                    category_id,
                    answer,
                    question,
                    airdate,
                    insdate,
                    amount
                FROM
                    sb_question
                WHERE
                    category_id = 26
                AND amount = 200
                AND question not like '%Clue Crew%'
                AND id NOT IN
                    (
                        SELECT
                            id
                        FROM
                            sb_question_filtered)
                ORDER BY
                    rand() limit 1) q
        UNION
        SELECT
            q.*,
            6 AS ROUND
        FROM
            (
                SELECT
                    id,
                    category_id,
                    answer,
                    question,
                    airdate,
                    insdate,
                    amount
                FROM
                    sb_question
                WHERE
                    category_id = 26
                AND amount = 300
                AND question not like '%Clue Crew%'
                AND id NOT IN
                    (
                        SELECT
                            id
                        FROM
                            sb_question_filtered)
                ORDER BY
                    rand() limit 1) q
        UNION
        SELECT
            q.*,
            6 AS ROUND
        FROM
            (
                SELECT
                    id,
                    category_id,
                    answer,
                    question,
                    airdate,
                    insdate,
                    amount
                FROM
                    sb_question
                WHERE
                    category_id = 26
                AND amount = 400
                AND question not like '%Clue Crew%'
                AND id NOT IN
                    (
                        SELECT
                            id
                        FROM
                            sb_question_filtered)
                ORDER BY
                    rand() limit 1) q
        UNION
        SELECT
            q.*,
            6 AS ROUND
        FROM
            (
                SELECT
                    id,
                    category_id,
                    answer,
                    question,
                    airdate,
                    insdate,
                    amount
                FROM
                    sb_question
                WHERE
                    category_id = 26
                AND amount = 500
                AND question not like '%Clue Crew%'
                AND id NOT IN
                    (
                        SELECT
                            id
                        FROM
                            sb_question_filtered)
                ORDER BY
                    rand() limit 1) q ) cat2
UNION
SELECT
    *
FROM
    (
        SELECT
            q.*,
            6 AS ROUND
        FROM
            (
                SELECT
                    id,
                    category_id,
                    answer,
                    question,
                    airdate,
                    insdate,
                    amount
                FROM
                    sb_question
                WHERE
                    category_id = 49
                AND amount = 100
                AND question not like '%Clue Crew%'
                AND id NOT IN
                    (
                        SELECT
                            id
                        FROM
                            sb_question_filtered)
                ORDER BY
                    rand() limit 1) q
        UNION
        SELECT
            q.*,
            6 AS ROUND
        FROM
            (
                SELECT
                    id,
                    category_id,
                    answer,
                    question,
                    airdate,
                    insdate,
                    amount
                FROM
                    sb_question
                WHERE
                    category_id = 49
                AND amount = 200
                AND question not like '%Clue Crew%'
                AND id NOT IN
                    (
                        SELECT
                            id
                        FROM
                            sb_question_filtered)
                ORDER BY
                    rand() limit 1) q
        UNION
        SELECT
            q.*,
            6 AS ROUND
        FROM
            (
                SELECT
                    id,
                    category_id,
                    answer,
                    question,
                    airdate,
                    insdate,
                    amount
                FROM
                    sb_question
                WHERE
                    category_id = 49
                AND amount = 300
                AND question not like '%Clue Crew%'
                AND id NOT IN
                    (
                        SELECT
                            id
                        FROM
                            sb_question_filtered)
                ORDER BY
                    rand() limit 1) q
        UNION
        SELECT
            q.*,
            6 AS ROUND
        FROM
            (
                SELECT
                    id,
                    category_id,
                    answer,
                    question,
                    airdate,
                    insdate,
                    amount
                FROM
                    sb_question
                WHERE
                    category_id = 49
                AND amount = 400
                AND question not like '%Clue Crew%'
                AND id NOT IN
                    (
                        SELECT
                            id
                        FROM
                            sb_question_filtered)
                ORDER BY
                    rand() limit 1) q
        UNION
        SELECT
            q.*,
            6 AS ROUND
        FROM
            (
                SELECT
                    id,
                    category_id,
                    answer,
                    question,
                    airdate,
                    insdate,
                    amount
                FROM
                    sb_question
                WHERE
                    category_id = 49
                AND amount = 500
                AND question not like '%Clue Crew%'
                AND id NOT IN
                    (
                        SELECT
                            id
                        FROM
                            sb_question_filtered)
                ORDER BY
                    rand() limit 1) q ) cat3
UNION
SELECT
    *
FROM
    (
        SELECT
            q.*,
            6 AS ROUND
        FROM
            (
                SELECT
                    id,
                    category_id,
                    answer,
                    question,
                    airdate,
                    insdate,
                    amount
                FROM
                    sb_question
                WHERE
                    category_id = 105
                AND amount = 100
                AND question not like '%Clue Crew%'
                AND id NOT IN
                    (
                        SELECT
                            id
                        FROM
                            sb_question_filtered)
                ORDER BY
                    rand() limit 1) q
        UNION
        SELECT
            q.*,
            6 AS ROUND
        FROM
            (
                SELECT
                    id,
                    category_id,
                    answer,
                    question,
                    airdate,
                    insdate,
                    amount
                FROM
                    sb_question
                WHERE
                    category_id = 105
                AND amount = 200
                AND question not like '%Clue Crew%'
                AND id NOT IN
                    (
                        SELECT
                            id
                        FROM
                            sb_question_filtered)
                ORDER BY
                    rand() limit 1) q
        UNION
        SELECT
            q.*,
            6 AS ROUND
        FROM
            (
                SELECT
                    id,
                    category_id,
                    answer,
                    question,
                    airdate,
                    insdate,
                    amount
                FROM
                    sb_question
                WHERE
                    category_id = 105
                AND amount = 300
                AND question not like '%Clue Crew%'
                AND id NOT IN
                    (
                        SELECT
                            id
                        FROM
                            sb_question_filtered)
                ORDER BY
                    rand() limit 1) q
        UNION
        SELECT
            q.*,
            6 AS ROUND
        FROM
            (
                SELECT
                    id,
                    category_id,
                    answer,
                    question,
                    airdate,
                    insdate,
                    amount
                FROM
                    sb_question
                WHERE
                    category_id = 105
                AND amount = 400
                AND question not like '%Clue Crew%'
                AND id NOT IN
                    (
                        SELECT
                            id
                        FROM
                            sb_question_filtered)
                ORDER BY
                    rand() limit 1) q
        UNION
        SELECT
            q.*,
            6 AS ROUND
        FROM
            (
                SELECT
                    id,
                    category_id,
                    answer,
                    question,
                    airdate,
                    insdate,
                    amount
                FROM
                    sb_question
                WHERE
                    category_id = 105
                AND amount = 500
                AND question not like '%Clue Crew%'
                AND id NOT IN
                    (
                        SELECT
                            id
                        FROM
                            sb_question_filtered)
                ORDER BY
                    rand() limit 1) q ) cat4
UNION
SELECT
    *
FROM
    (
        SELECT
            q.*,
            6 AS ROUND
        FROM
            (
                SELECT
                    id,
                    category_id,
                    answer,
                    question,
                    airdate,
                    insdate,
                    amount
                FROM
                    sb_question
                WHERE
                    category_id = 249
                AND amount = 100
                AND question not like '%Clue Crew%'
                AND id NOT IN
                    (
                        SELECT
                            id
                        FROM
                            sb_question_filtered)
                ORDER BY
                    rand() limit 1) q
        UNION
        SELECT
            q.*,
            6 AS ROUND
        FROM
            (
                SELECT
                    id,
                    category_id,
                    answer,
                    question,
                    airdate,
                    insdate,
                    amount
                FROM
                    sb_question
                WHERE
                    category_id = 249
                AND amount = 200
                AND question not like '%Clue Crew%'
                AND id NOT IN
                    (
                        SELECT
                            id
                        FROM
                            sb_question_filtered)
                ORDER BY
                    rand() limit 1) q
        UNION
        SELECT
            q.*,
            6 AS ROUND
        FROM
            (
                SELECT
                    id,
                    category_id,
                    answer,
                    question,
                    airdate,
                    insdate,
                    amount
                FROM
                    sb_question
                WHERE
                    category_id = 249
                AND amount = 300
                AND question not like '%Clue Crew%'
                AND id NOT IN
                    (
                        SELECT
                            id
                        FROM
                            sb_question_filtered)
                ORDER BY
                    rand() limit 1) q
        UNION
        SELECT
            q.*,
            6 AS ROUND
        FROM
            (
                SELECT
                    id,
                    category_id,
                    answer,
                    question,
                    airdate,
                    insdate,
                    amount
                FROM
                    sb_question
                WHERE
                    category_id = 249
                AND amount = 400
                AND question not like '%Clue Crew%'
                AND id NOT IN
                    (
                        SELECT
                            id
                        FROM
                            sb_question_filtered)
                ORDER BY
                    rand() limit 1) q
        UNION
        SELECT
            q.*,
            6 AS ROUND
        FROM
            (
                SELECT
                    id,
                    category_id,
                    answer,
                    question,
                    airdate,
                    insdate,
                    amount
                FROM
                    sb_question
                WHERE
                    category_id = 249
                AND amount = 500
                AND question not like '%Clue Crew%'
                AND id NOT IN
                    (
                        SELECT
                            id
                        FROM
                            sb_question_filtered)
                ORDER BY
                    rand() limit 1) q ) cat5
UNION
SELECT
    *
FROM
    (
        SELECT
            q.*,
            6 AS ROUND
        FROM
            (
                SELECT
                    id,
                    category_id,
                    answer,
                    question,
                    airdate,
                    insdate,
                    amount
                FROM
                    sb_question
                WHERE
                    category_id = 770
                AND amount = 100
                AND question not like '%Clue Crew%'
                AND id NOT IN
                    (
                        SELECT
                            id
                        FROM
                            sb_question_filtered)
                ORDER BY
                    rand() limit 1) q
        UNION
        SELECT
            q.*,
            6 AS ROUND
        FROM
            (
                SELECT
                    id,
                    category_id,
                    answer,
                    question,
                    airdate,
                    insdate,
                    amount
                FROM
                    sb_question
                WHERE
                    category_id = 770
                AND amount = 200
                AND question not like '%Clue Crew%'
                AND id NOT IN
                    (
                        SELECT
                            id
                        FROM
                            sb_question_filtered)
                ORDER BY
                    rand() limit 1) q
        UNION
        SELECT
            q.*,
            6 AS ROUND
        FROM
            (
                SELECT
                    id,
                    category_id,
                    answer,
                    question,
                    airdate,
                    insdate,
                    amount
                FROM
                    sb_question
                WHERE
                    category_id = 770
                AND amount = 300
                AND question not like '%Clue Crew%'
                AND id NOT IN
                    (
                        SELECT
                            id
                        FROM
                            sb_question_filtered)
                ORDER BY
                    rand() limit 1) q
        UNION
        SELECT
            q.*,
            6 AS ROUND
        FROM
            (
                SELECT
                    id,
                    category_id,
                    answer,
                    question,
                    airdate,
                    insdate,
                    amount
                FROM
                    sb_question
                WHERE
                    category_id = 770
                AND amount = 400
                AND question not like '%Clue Crew%'
                AND id NOT IN
                    (
                        SELECT
                            id
                        FROM
                            sb_question_filtered)
                ORDER BY
                    rand() limit 1) q
        UNION
        SELECT
            q.*,
            6 AS ROUND
        FROM
            (
                SELECT
                    id,
                    category_id,
                    answer,
                    question,
                    airdate,
                    insdate,
                    amount
                FROM
                    sb_question
                WHERE
                    category_id = 770
                AND amount = 500
                AND question not like '%Clue Crew%'
                AND id NOT IN
                    (
                        SELECT
                            id
                        FROM
                            sb_question_filtered)
                ORDER BY
                    rand() limit 1) q ) cat6