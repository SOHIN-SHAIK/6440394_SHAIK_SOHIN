SELECT DATE_FORMAT(registration_date, '%Y-%m') AS month, COUNT(user_id) AS registration_count 
FROM Users 
WHERE registration_date >= DATE_SUB(CURDATE(), INTERVAL 12 MONTH) 
GROUP BY month;