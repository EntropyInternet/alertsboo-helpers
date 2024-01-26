# REST API Specification v0.1

Subject to change.

REST API uses a simple auth token in header. The token is valid indefinitely, but can be rotated by calling the `ROTATE token` action.


| Objects | Action          | API                       | Method | Description                        |
|---------|-----------------|---------------------------|--------|------------------------------------|
| User    | GET user        | v1/users/:id              | GET    | Describes user                     |
|         | UPDATE user     | v1/users/:id              | POST   | Updates user info                  |
|         | ROTATE token    | v1/users/:id/token        | GET    | Expires old api key and gets new   |
| Bells   | LIST bells      | v1/bells                  | GET    | Lists bells of user                |
|         | GET bell        | v1/bells/:id              | GET    | Describes bell                     |
|         | CREATE bell     | v1/bells                  | POST   | Creates a bell                     |
|         | UPDATE bell     | v1/bells/:id              | POST   | Update bell                        |
|         | LIST bell alerts| v1/bells/:id/alerts       | GET    | List alerts of bell                |
| Alerts  | GET alert       | v1/alerts/:id             | GET    | Describes alert                    |
| Samples | Instagram       | v1/sample/instagram/post  | GET    | Get a sample Instagram post        |
|         |                 | v1/sample/instagram/reel  | GET    | Get a sample Instagram reel        |
|         |                 | v1/sample/instagram/story | GET    | Get a sample Instagram story       |
|         |                 | v1/sample/instagram/live  | GET    | Get a sample Instagram live        |
|         | Twitter         | v1/sample/twitter/post    | GET    | Get a sample Twitter post          |
