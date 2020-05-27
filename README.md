# back-end

Server site:

https://pintereach-1.herokuapp.com/

REGISTRATION

- POST "https://pintereach-1.herokuapp.com/api/auth/register"

SUCCESSFUL RESPONSE

- Status: 201
- JSON: { "message": "Registration Success!" )

REQUIRED FIELDS

- username (string)
- password (string)

LOGIN

- POST "https://pintereach-1.herokuapp.com/api/auth/login"

SUCCESSFUL RESPONSE

- Status: 200
- JSON: { "message": "Login Success!", token }

REQUIRED FIELDS

- username (string)
- password (string)

GET ALL ARTICLES

- GET `https://pintereach-1.herokuapp.com/api/articles`

- AUTHORIZATION: token

GET ARTICLE BY ID

- GET `https://pintereach-1.herokuapp.com/api/articles/:id` (article ID)

Headers

- AUTHORIZATION: token

GET ARTICLES FOR USER

-GET `https://pintereach-1.herokuapp.com/api/articles/user/:id` (user ID)

Headers

- AUTHORIZATION: token

EDIT ARTICLE

- PUT `https://pintereach-1.herokuapp.com/api/articles/:id` (article ID)

REQUIRED

- Author (string)
- Link (string)

Headers

- AUTHORIZATION: token

ADD ARTICLE

- POST `https://pintereach-1.herokuapp.com/api/articles`

REQUIRED
-author (string)
-link (string)

Headers

- AUTHORIZATION: token

DELETE ARTICLE

- DELETE `https://pintereach-1.herokuapp.com/api/articles/:id` (articleID)

Headers

- AUTHORIZATION: token
