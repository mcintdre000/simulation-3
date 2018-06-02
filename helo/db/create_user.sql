INSERT INTO users ( auth0_id, name, photo )
VALUES ( ${auth0_id}, ${name}, ${photo} )
RETURNING *;