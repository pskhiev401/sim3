SELECT * FROM s3_post a
JOIN s3_users b  
ON a.user_alias = b.username
WHERE user_alias = $1;