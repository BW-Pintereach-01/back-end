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
