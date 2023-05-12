---
title: "How to make a RESTful API"
description: "Learn how to make a secure RESTful API using ExpressJS and JsonWebToken"
date: 12/5/23
coverImage: "https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/JKUTrJ4vK00/upload/23bbfe79f56603263f04ea4ab1c684ee.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
author: "Satindar31"
authorCover
---
## Introduction

In modern web development, building a RESTful API has become an essential task for many developers. RESTful APIs allow you to provide a standardized way for other applications to access the data and functionality of your web application. However, as with any aspect of web development, security is a critical concern when building a RESTful API. In this blog post, we will discuss how to build a secure RESTful API with Node.js and Express.

**REST** (Representational State Transfer) is a software architectural style that defines a set of constraints for creating web services. RESTful APIs are built using these constraints and are designed to be scalable, simple, and easy to understand. RESTful APIs have become an essential part of modern web development, allowing developers to provide standardized access to their applications' functionality and data.

### Node.js and Express for Building RESTful APIs

Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a web browser. Node.js is built on the V8 JavaScript engine from Google, which allows it to execute code extremely quickly. Express is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. Express is widely used for building RESTful APIs due to its simplicity and flexibility.

### Security Concerns in Building RESTful APIs

When building a RESTful API, security should always be a top concern. There are several security concerns that you should consider when building a RESTful API:

Authentication and Authorization: You need to ensure that only authorized users can access the API. This means implementing a secure login system and a mechanism for generating and verifying authentication tokens.

Data Validation: It is important to validate user input data to ensure that it is valid and not malicious. This can include validating user input formats, checking data ranges, and preventing SQL injection attacks.

Protection against Common Attacks: There are several common attacks that RESTful APIs are vulnerable to, including SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF). You should implement measures to protect your API against these attacks.

## Building a Secure RESTful API with Node.js and Express

Now that we have discussed some of the security concerns in building a RESTful API, let's look at how to build a secure RESTful API with Node.js and Express. We will cover the following steps:

Set up the project and install dependencies Define the API endpoints and routes Implement authentication and authorization Validate user input data Protect against common attacks Test the API

**Step 1**: Set Up the Project and Install Dependencies

To get started, create a new directory for your project and initialize it with npm. Then, install the following dependencies:

1. `express`
    
2. `body-parser`
    
3. `bcrypt`
    
4. `jsonwebtoken`
    
5. `validator`
    
6. `helmet`
    

You can use the following command to install them via NPM:

`npm install express body-parser bcrypt jsonwebtoken validator helmet`

Express is the web framework we will use to build the API. Body-parser is a middleware that allows us to parse incoming request bodies. Bcrypt is a library for hashing passwords. Jsonwebtoken is a library for generating and verifying JSON web tokens (JWTs). Validator is a library for validating input data. Helmet is a middleware that helps to secure the application.

**Step 2:** Define the API Endpoints and Routes

Next, define the API endpoints and routes. For example, you might define the following endpoints:

1. `/signup`
    
2. `/login`
    
3. `/user/:id`
    
4. `/users`
    

These endpoints could be used for signing up new users, logging in existing users, retrieving a specific user by ID, and retrieving a list of all users.

Here is an example of how you might define the routes for these endpoints:

```javascript
const express = require('express');
const router = express.Router();

// Sign up a new user
router.post('/signup', (req, res) => {
  // TODO: Implement sign up logic
});

// Log in an existing user
router.post('/login', (req, res) => {
  // TODO: Implement login logic
});

// Retrieve a specific user by ID
router.get('/user/:id', (req, res) => {
  // TODO: Implement user retrieval logic
});

// Retrieve a list of all users
router.get('/users', (req, res) => {
  // TODO: Implement user list retrieval logic
});

module.exports = router;
```

users, retrieving a specific user by ID, and retrieving a list of all users.

Here is an example of how you might define the routes for these endpoints:

```javascript
const express = require('express');
const router = express.Router();

// Sign up a new user
router.post('/signup', (req, res) => {
  // TODO: Implement sign up logic
});

// Log in an existing user
router.post('/login', (req, res) => {
  // TODO: Implement login logic
});

// Retrieve a specific user by ID
router.get('/user/:id', (req, res) => {
  // TODO: Implement user retrieval logic
});

// Retrieve a list of all users
router.get('/users', (req, res) => {
  // TODO: Implement user list retrieval logic
});

module.exports = router;
```

**Step 3:** Implement Authentication and Authorization

To implement authentication and authorization, we will use JSON Web Tokens (JWTs). When a user logs in, we will generate a JWT and send it back to the client. The client will then include this token in each subsequent request to the API. We will use the `jsonwebtoken` library to generate and verify JWTs.

Here is an example of how you might implement authentication and authorization:

```javascript
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const JWT_SECRET = 'your_jwt_secret_here';

// Sign up a new user
router.post('/signup', async (req, res) => {
  // TODO: Validate user input data

  // Hash the password using bcrypt
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  // TODO: Save the user to the database

  // Generate a JWT and send it back to the client
  const token = jwt.sign({ userId: user.id }, JWT_SECRET);
  res.json({ token });
});

// Log in an existing user
router.post('/login', async (req, res) => {
  // TODO: Validate user input data

  // TODO: Retrieve the user from the database

  // Verify the password using bcrypt
  const passwordIsValid = await bcrypt.compare(req.body.password, user.password);
  if (!passwordIsValid) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Generate a JWT and send it back to the client
  const token = jwt.sign({ userId: user.id }, JWT_SECRET);
  res.json({ token });
});

// Authenticate requests using JWTs
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }

    req.user = user;
    next();
  });
};

// Retrieve a specific user by ID (requires authentication)
router.get('/user/:id', authenticateToken, (req, res) => {
  // TODO: Retrieve the user from the database and return it
});

// Retrieve a list of all users (requires authentication)
router.get('/users', authenticateToken, (req, res) => {
  // TODO: Retrieve a list of all users from the database and return it
});

module.exports = router;
```

**Step 4:** Validate User Input Data

To validate user input data, we will use the `validator` library. This library provides functions for validating various types of input data, such as email addresses, URLs, and dates.

Here is an example of how you might use the `validator` library to validate user input data:

```javascript
const validator = require('validator');

// Sign up a new user
router.post('/signup', async (req, res) => {
  // Validate user input data
  if (!validator.isEmail(req.body.email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  if (!validator.isLength(req.body.password, { min: 8 })) {
    return res.status(400).json({ error: 'Password must be at least 8 characters long' });
  }

  // Hash the password using bcrypt
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  // TODO: Save the user to the database

  // Generate a JWT and send it back to the client
  const token = jwt.sign({ userId: user.id }, JWT_SECRET);
  res.json({ token });
});

// Log in an existing user
router.post('/login', async (req, res) => {
  // Validate user input data
  if (!validator.isEmail(req.body.email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  // TODO: Retrieve the user from the database

  // Verify the password using bcrypt
  const passwordIsValid = await bcrypt.compare(req.body.password, user.password);
  if (!passwordIsValid) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Generate a JWT and send it back to the client
  const token = jwt.sign({ userId: user.id }, JWT_SECRET);
  res.json({ token });
});
```

**Step 5:** Save User Data to a Database

Here's an example of how you could store user data in a MongoDB database using Mongoose:

First, install the Mongoose package:

```plaintext
npm install mongoose
```

Then setup the connection:

```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true });
```

Then define a moongose schema for the user data:

```javascript
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(v) {
        return /\S+@\S+\.\S+/.test(v);
      },
      message: props => `${props.value} is not a valid email address!`
    },
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);
```

Now, we can update our signup and login routes to save and retrieve user data from MongoDB:

```javascript
// Sign up a new user
router.post('/signup', async (req, res) => {
  // Validate user input data
  // ...

  // Hash the password using bcrypt
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  // Save the user to the database
  const user = new User({
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    await user.save();

    // Generate a JWT and send it back to the client
    const token = jwt.sign({ userId: user.id }, JWT_SECRET);
    res.json({ token });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ error: 'Email already in use' });
    }
    res.status(500).json({ error: 'Error creating user' });
  }
});

// Log in an existing user
router.post('/login', async (req, res) => {
  // Validate user input data
  // ...

  // Retrieve the user from the database
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Verify the password using bcrypt
  const passwordIsValid = await bcrypt.compare(req.body.password, user.password);
  if (!passwordIsValid) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Generate a JWT and send it back to the client
  const token = jwt.sign({ userId: user.id }, JWT_SECRET);
  res.json({ token });
});
```

In the `signup` route, we create a new `User` instance with the email and hashed password from the request body, and save it to the database using the `save()` method. If the email is already in use, we return a 400 Bad Request response with an error message. If there is any other error, we return a 500 Internal Server Error response.

In the `login` route, we retrieve the user from the database using the `findOne()` method, and verify the password using bcrypt. If the email or password is incorrect, we return a 401 Unauthorized response with an error message. If the login is successful, we generate a JWT and send it back to the client.

Here's how you could use MongoDB to store additional user data.

First, let's update the Mongoose schema to include more fields:

```javascript
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(v) {
        return /\S+@\S+\.\S+/.test(v);
      },
      message: props => `${props.value} is not a valid email address!`
    },
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});
```

In this updated schema, we've added fields for first name, last name, age, createdAt, and updatedAt. We've also set defaults for createdAt and updatedAt to the current date using [`Date.now`](http://Date.now).

Now, let's update the signup route to save this additional data to the database:

```javascript
router.post('/signup', async (req, res) => {
  // Validate user input data
  // ...

  // Hash the password using bcrypt
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  // Save the user to the database
  const user = new User({
    email: req.body.email,
    password: hashedPassword,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
  });

  try {
    await user.save();

    // Generate a JWT and send it back to the client
    const token = jwt.sign({ userId: user.id }, JWT_SECRET);
    res.json({ token });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ error: 'Email already in use' });
    }
    res.status(500).json({ error: 'Error creating user' });
  }
});
```

Great! Here's how you could use MongoDB to store additional user data.

First, let's update the Mongoose schema to include more fields:

```javascript
yaml
```

```javascript
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(v) {
        return /\S+@\S+\.\S+/.test(v);
      },
      message: props => `${props.value} is not a valid email address!`
    },
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});
```

In this updated schema, we've added fields for first name, last name, age, createdAt, and updatedAt. We've also set defaults for createdAt and updatedAt to the current date using [`Date.now`](http://Date.now).

Now, let's update the signup route to save this additional data to the database:

```javascript
scss
```

```javascript
router.post('/signup', async (req, res) => {
  // Validate user input data
  // ...

  // Hash the password using bcrypt
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  // Save the user to the database
  const user = new User({
    email: req.body.email,
    password: hashedPassword,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
  });

  try {
    await user.save();

    // Generate a JWT and send it back to the client
    const token = jwt.sign({ userId: user.id }, JWT_SECRET);
    res.json({ token });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ error: 'Email already in use' });
    }
    res.status(500).json({ error: 'Error creating user' });
  }
});
```

In this updated signup route, we create a new `User` instance with the additional fields from the request body, and save it to the database using the `save()` method. If there is any error, we return an appropriate response.

We can also update the login route to retrieve this additional data from the database and include it in the JWT payload:

```javascript
router.post('/login', async (req, res) => {
  // Validate user input data
  // ...

  // Retrieve the user from the database
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Verify the password using bcrypt
  const passwordIsValid = await bcrypt.compare(req.body.password, user.password);
  if (!passwordIsValid) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Generate a JWT with user data and send it back to the client
  const payload = {
    userId: user.id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    age: user.age,
  };
  const token = jwt.sign(payload, JWT_SECRET);
  res.json({ token });
});
```

In this updated login route, we retrieve the user from the database as before, and verify the password using bcrypt. We then create a payload object with the user data we want to include in the JWT, including the additional fields we've added to the schema. We then generate a JWT with this payload and send it back to the client.

Finally, we can add a route to retrieve a user's data from the database:

```javascript
router.get('/user', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving user data' });
  }
});
```

In this route, we use the `authenticateToken` middleware we defined earlier to ensure that the user making the request is authenticated. We then retrieve the user's data from the database using their user ID, and return it to the client. We also exclude the password field using the `select()` method to prevent the password from being sent to the client.

With these updates, we can now store additional user data in the MongoDB database and include it in JWTs. This can be useful for a variety of purposes, such as personalizing the user's experience or tracking usage statistics.

And that's all, everything should now be working!