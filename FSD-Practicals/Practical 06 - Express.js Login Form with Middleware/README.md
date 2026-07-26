# 📂 Practical 06 - Express.js Login Form with Middleware

## 🎯 Aim

Write an Express.js application that:

1. Loads an HTML page containing:
   - Username
   - Password
   - Submit Button
2. Sends the form data to the `/check` route using the **POST** method.
3. If the username is **admin**, call the next middleware and display:

```
Welcome... admin
```

4. If the username is **not admin**, display:

```
Warning Message
```

in **red color**.

---

# 📝 Problem Statement

Create a login form using HTML.

When the user clicks the **Submit** button:

- If the username is **admin**, display:

```
Welcome... admin
```

using the next middleware.

- Otherwise display:

```
Warning Message
```

in **red color**.

---

# 📁 Project Structure

```
p6
│
├── server.js
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

---

# 💻 server.js

```javascript
const express = require("express");

const app = express();

app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{

    res.sendFile(__dirname+"/index.html");

});

app.post("/check",

(req,res,next)=>{

    if(req.body.username=="admin"){

        next();

    }

    else{

        res.send("<h1 style='color:red'>Warning Message</h1>");

    }

},

(req,res)=>{

    res.send("<h1>Welcome... admin</h1>");

}

);

app.listen(3000);

console.log("Server Running");
```

---

# 💻 index.html

```html
<!DOCTYPE html>
<html>

<head>
    <title>Login Form</title>
</head>

<body>

<h2>Login Form</h2>

<form action="/check" method="POST">

    Username :
    <input type="text" name="username">

    <br><br>

    Password :
    <input type="password" name="password">

    <br><br>

    <input type="submit" value="Login">

</form>

</body>

</html>
```

---

# ▶️ Output

### Home Page

```
http://localhost:3000
```

Displays:

```
Login Form

Username

Password

Login Button
```

---

### Username = admin

Output:

```
Welcome... admin
```

---

### Username ≠ admin

Output:

```
Warning Message
```

Displayed in **red color**.

---

# 🧠 Logic

1. Create an Express application.
2. Parse HTML form data using `express.urlencoded()`.
3. Load the HTML form using `sendFile()`.
4. Receive form data using the POST method.
5. Check whether the username is `admin`.
6. If yes, call `next()` to execute the next middleware.
7. Otherwise display the warning message.

---

# 📚 Concepts Used

- Express.js
- Middleware
- next()
- GET Method
- POST Method
- HTML Form
- sendFile()
- express.urlencoded()
- req.body
- Conditional Statements

---

# 🔄 Execution Flow

```
Start
   │
   ▼
Load index.html
   │
   ▼
Fill Login Form
   │
   ▼
Submit (POST)
   │
   ▼
/check Route
   │
   ▼
Check Username
   │
   ├── admin
   │      │
   │      ▼
   │    next()
   │      │
   │      ▼
   │ Welcome... admin
   │
   └── Not admin
          │
          ▼
   Warning Message
```

---

# ❗ Common Mistakes

- Forgetting `app.use(express.urlencoded({extended:true}))`.
- Using `GET` instead of `POST`.
- Writing `req.username` instead of `req.body.username`.
- Forgetting `next()`.
- Incorrect `action` attribute in the form.
- Incorrect `name` attribute in the input field.

---

# 🎯 Viva Questions

### 1. What is Express.js?

Express.js is a web framework for Node.js used to create web applications and APIs.

---

### 2. Why do we use `express.urlencoded()`?

It converts HTML form data into a JavaScript object and stores it inside `req.body`.

---

### 3. What is middleware?

Middleware is a function that executes between the request and the response. It can process the request or pass control to the next middleware using `next()`.

---

### 4. What does `next()` do?

It transfers control to the next middleware function.

---

### 5. Why do we use `sendFile()`?

It sends an HTML file from the server to the browser.

---

### 6. Why do we use `req.body.username`?

To access the username entered by the user in the HTML form.

---

# 📖 Conclusion

This practical demonstrates how to build a simple login system using Express.js. It covers HTML forms, POST requests, middleware, routing, and conditional logic based on user input.

---

## 👩‍💻 Author

**Dhruvi Soni**

B.Tech Artificial Intelligence & Data Science
