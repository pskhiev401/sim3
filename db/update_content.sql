INSERT INTO s3_post
  (content)
VALUES
  ($2)
WHERE username = $1;