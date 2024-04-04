## Build a basic version of PayTM

## Docker

- To build the mongodb in docker `docker build ./ -t mongodb:4.7-replset`
- To run the mongodb `docker run --name mongodb-replset -p 27017:27017 -d mongodb:4.7-replset`

## Salt

- Before storing the password in the database developers hash the password with the password+salt, we add salt such that it will be difficult to decode the password, what if we compare the password and see the exact hash is coming or not but by using salt(a random string for each user) this can be avoided.
- hash and salt both are stored in the db

## Precision Errors

- To avoid precision errors in payment apps, we never store the money in float we always convert it into integer then store it.
