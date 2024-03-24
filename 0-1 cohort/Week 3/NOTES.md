## Express Adv Topic

- Authentication
- Middlewares
- Global Catches

## Middlewares

- In real world the use case of middlewares is usually to do pre checks, pre-checks are of two types: 1.Authentication Check: Making sure a the user is logged in, 2.Input Validation Check.
  ![alt text](img-3.1/image.png)
- In the above code you can see the return early approach
- The below both conditions are same, not over and it converts to or with negation. Check De Morgan's Laws
  ![alt text](img-3.1/image-1.png)
- Same can be seen for the or case
  ![alt text](img-3.1/image-2.png)
- The below way of writing code violate the D.R.Y principle
  ![alt text](img-3.1/image-3.png)
- Slightly better solution would create a wrapper function
- The Best optimization for this use case in express and other languages is middlewares.
  ![alt text](img-3.1/image-4.png)
- Here you can give the multiple callback functions,
  ![alt text](img-3.1/image-5.png)
- next is function in itself and we call it if we think the things are fine and we can proceed. And next takes care that the control will reach to the next callback in the sequence.
- If you will end the flow after the res is send then it will go on and if you are sending response twice it will cause error.
  ![alt text](img-3.1/image-6.png)
- Rate limitting can be a part of middleware, you can implement it using this. We can control how many request can be processed per second.
  ![alt text](img-3.1/image-7.png)
- DDoS protection is done before the control reaches to the route checks.
- Another good useCase of middlewares is calculating requests
  ![alt text](img-3.1/image-8.png)
- app.use() is a middleware. To get the POST, PUT body parameters we need to use this middleware. Only then you will able to catch the body send in POST, PUT request.
  ![alt text](img-3.1/image-9.png)
- This app.use() will be called for every request, i.e. it is called everywhere in the request process sequence. It is same as explicitly putting the middleware at the start of a specific route.
  ![alt text](img-3.1/image-10.png)
- If we don't call next() the control won't go ahead. It calls the next middleware in the same route
- Do these assignments
  ![alt text](img-3.1/image-11.png)
- Middlewares are called in sequence
  ![alt text](img-3.1/image-27.png)
- Here the below app.use will be called after the request is processed and if we get any error then the error middleware will be called. If error comes no more middlewares will be called and control reaches the global catch.
  ![alt text](img-3.1/image-25.png)
- Look for the use of next() in the route handler?

## Global Catch

![alt text](img-3.1/image-12.png)

- Add it at the end so that if any exception occur it will able to handle it
  ![alt text](img-3.1/image-13.png)
  ![alt text](img-3.1/image-28.png)

## Input Validations - zod

- You can use zod for complex input validations
  ![alt text](img-3.1/image-14.png)
- npm install zod
  ![alt text](img-3.1/image-15.png)
  ![alt text](img-3.1/image-16.png)
  ![alt text](img-3.1/image-17.png)
  ![alt text](img-3.1/image-18.png)
- Assignment
  ![alt text](img-3.1/image-19.png)
  ![alt text](img-3.1/image-20.png)
- look at zod documentation
- schema.parse vs schema.safeParse: parse will throw error if schema validation fails whereas safeParse will not throw an error
  ![alt text](img-3.1/image-21.png)
- Coercion to push someone to do something
  ![alt text](img-3.1/image-22.png)
- Here in the below app.use we are passing the function that is returned by the express.json rather than express.json function.
  ![alt text](img-3.1/image-23.png)
  ![alt text](img-3.1/image-24.png)
- We can't trust the frontend checks so we need server level checks too, because people can try to exploit your server from other api request tools.
- It is a good backend validation library, though you can use it independently too.

## Authentication

![alt text](img-3.1/image-26.png)
![alt text](image-11.png)

# Lec 2

## The Fetch API

- fetch: with then vs async/ await
  ![alt text](img-3.2/image.png)
  ![alt text](img-3.2/image-3.png)

## Authentication

- Let's create a way for authentication
  ![alt text](img-3.2/image-1.png)
- Let's understand some cryptography jargon
  - Hashing: Converting a simple string in random string such that same random string is generate for same input. This will keep your passwords safe from the hackers, and give a layer of security when your passwords are stored in DB i.e. hashed password. Hashing is only 1 way, you can hash the string but you can't get string back from hashed string. Hashing doesn't require the password.
  - Encryption: It is 2 way, it requires password to be accessed.
  - JSON Web Tokens: It is also a encryption-hashing function but it will only work for JSON input. Web-created to be used over web, token-in the end it creates a token which can be send. JWT.decode() doesn't require password but JWT.verify() will require the password. If you have JWT token you can decode it using JWT decoder.
  - Local Storage
- Assignment
  ![alt text](img-3.2/image-2.png)

```
const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();

const ALL_USERS = [
 {
   username: "harkirat@gmail.com",
   password: "123",
   name: "harkirat singh",
 },
 {
   username: "raman@gmail.com",
   password: "123321",
   name: "Raman singh",
 },
 {
   username: "priya@gmail.com",
   password: "123321",
   name: "Priya kumari",
 },
];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  let userExists = false;
  for (let i = 0; i < ALL_USERS.length; i++) {
    if (
      ALL_USERS[i].username === username &&
      ALL_USERS[i].password === password
    ) {
      userExists = true;
    }
  }
  return userExists;
}

app.post("/signin", function (req, res) {
 const username = req.body.username;
 const password = req.body.password;

 if (!userExists(username, password)) {
   return res.status(403).json({
     msg: "User doesnt exist in our in memory db",
   });
 }

 var token = jwt.sign({ username: username }, "shhhhh");
 return res.json({
   token,
 });
});

app.get("/users", function (req, res) {
 const token = req.headers.authorization;
 try {
   const decoded = jwt.verify(token, jwtPassword);
   const username = decoded.username;
   // return a list of users other than this username
 } catch (err) {
   return res.status(403).json({
     msg: "Invalid token",
   });
 }
});

app.listen(3000)
```

- Using token saves your DB call to fetch the user details and verify it, now you can verify it using the in memory session object.
- github secrets is the best way to hide your sensitive config and secrets
  ![alt text](img-3.2/image-10.png)

## Databases

- ![alt text](img-3.2/image-4.png)

## MongoDB

- ![alt text](img-3.2/image-5.png)
- Sending Data Through HTTP Server

  ```
    const mongoose = require('mongoose');
    mongoose.connect('mongodb+srv://pandey:Rkp1234@100xlearn.u3z8giu.mongodb.net/userappnew');

    // Describe the model
    const User = mongoose.model('Users', {name: String, email: String, password: String});

    const user = new User({name: 'Rakesh', email: 'rakesh.pandey@gmail.com, password: '1234'});

    user.save();
  ```

  - ![alt text](img-3.2/image-7.png)
  - DB vs File
    ![alt text](img-3.2/image-8.png)
    ![alt text](img-3.2/image-9.png)

## JWT

- Steps in JWT Authentication
  - Generating JWT
  - Decoding JWT
  - Verifying JWT
- We are gonna use the `jsonwebtoken` library to generate, decode and verify the JWTs.
  ![alt text](img-3.2/image-12.png)
- Anyone can see the contents of jwt without the secret key but it won't be able to verify it, only the server who have signed it will be able to verify it.
- decode vs verify
  ![alt text](img-3.2/image-13.png)
  ![alt text](img-3.2/image-14.png)
  ![alt text](img-3.2/image-15.png)
- decode: return the decoded contents if valid JWT otherwise null
- verify: throw error if signature is not valid, otherwise return the verified content.

## Middleware Recap

- ![alt text](img-3.2/image-16.png)
- ![alt text](img-3.2/image-18.png)
- Middlewares can be re-used.
  ![alt text](img-3.2/image-17.png)
- Rate limiter
  ![alt text](img-3.2/image-19.png)
