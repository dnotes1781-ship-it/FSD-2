# 📂 Practical 05 - HTTP Server with Routing (Home, About & Contact Pages)

## 🎯 Aim

Write a Node.js program to:

1. Create an HTTP server.
2. Display **"Welcome to Home Page"** on the home page (`/`).
3. Display two links:
   - About Us
   - Contact Us
4. When the user clicks **About Us**, display:
   - **Welcome to LJ University**
   - Bold text
   - Blue color
5. When the user clicks **Contact Us**, display:
   - *Email: abc@ljinstitutes.edu.in*
   - Italic text
   - Red color
6. If any other page is requested, display:
   - **Page not found**

---

# 📝 Problem Statement

Create a Node.js HTTP server with routing.

### Home Page (`/`)

Display:

- Welcome to Home Page
- About Us Link
- Contact Us Link

### About Page (`/about`)

Display:

```
Welcome to LJ University
```

- Bold
- Blue Color

### Contact Page (`/contact`)

Display:

```
Email : abc@ljinstitutes.edu.in
```

- Italic
- Red Color

### Any Other URL

Display:

```
Page not found
```

---

# 💻 Source Code

```javascript
const http = require("http");

http.createServer((req,res)=>{

    if(req.url=="/"){

        res.writeHead(200,{
            "Content-Type":"text/html"
        });

        res.write(`
            <h1>Welcome to Home Page</h1>

            <a href="/about">About Us</a><br><br>

            <a href="/contact">Contact Us</a>
        `);

        res.end();

    }

    else if(req.url=="/about"){

        res.writeHead(200,{
            "Content-Type":"text/html"
        });

        res.write(`<b style="color:blue">Welcome to LJ University</b>`);

        res.end();

    }

    else if(req.url=="/contact"){

        res.writeHead(200,{
            "Content-Type":"text/html"
        });

        res.write(`<i style="color:red">Email : abc@ljinstitutes.edu.in</i>`);

        res.end();

    }

    else{

        res.writeHead(404,{
            "Content-Type":"text/plain"
        });

        res.end("Page not found");

    }

}).listen(5000);

console.log("Server Running");
```

---

# ▶️ Output

## Home Page

Open:

```
http://localhost:5000
```

Output:

```
Welcome to Home Page

About Us

Contact Us
```

---

## About Page

Open:

```
http://localhost:5000/about
```

Output:

```
Welcome to LJ University
```

- Blue Color
- Bold Text

---

## Contact Page

Open:

```
http://localhost:5000/contact
```

Output:

```
Email : abc@ljinstitutes.edu.in
```

- Red Color
- Italic Text

---

## Invalid URL

Open:

```
http://localhost:5000/abc
```

Output:

```
Page not found
```

---

# 🧠 Logic

1. Import the HTTP module.
2. Create an HTTP server.
3. Check the requested URL using `req.url`.
4. If `/`, display the Home page.
5. If `/about`, display the About page.
6. If `/contact`, display the Contact page.
7. Otherwise, display **Page not found**.

---

# 📚 Concepts Used

- Node.js
- HTTP Module
- HTTP Server
- Routing
- Request Object (`req`)
- Response Object (`res`)
- HTML Response
- Hyperlinks (`<a>`)
- Inline CSS
- HTTP Status Codes (200, 404)

---

# 🔄 Execution Flow

```text
Start
   │
   ▼
Import HTTP Module
   │
   ▼
Create Server
   │
   ▼
Check req.url
   │
   ├── "/" → Home Page
   │
   ├── "/about" → About Page
   │
   ├── "/contact" → Contact Page
   │
   └── Other → Page not found
   │
   ▼
End
```

---

# ❗ Common Mistakes

- Forgetting `res.end()`.
- Writing `"about"` instead of `"/about"`.
- Using `text/plain` instead of `text/html`.
- Forgetting `href` inside the `<a>` tag.
- Forgetting `listen(5000)`.

---

# 🎯 Viva Questions

### Q1. What is the HTTP module?

The HTTP module is a built-in Node.js module used to create web servers and handle client requests and responses.

---

### Q2. What is `req.url`?

It stores the URL requested by the client.

Example:

```
/
```

```
/about
```

```
/contact
```

---

### Q3. Why do we use `res.writeHead()`?

To send the HTTP status code and response headers.

---

### Q4. Why do we use `Content-Type: text/html`?

To tell the browser that the response contains HTML.

---

### Q5. Why do we use `<a href="">`?

To create hyperlinks that allow users to navigate to different pages.

---

### Q6. What does `404` mean?

It means the requested page was not found.

---

# 📖 Conclusion

This practical demonstrates how to create a basic Node.js HTTP server with routing, HTML responses, hyperlinks, and error handling using different URLs.

---

## 👩‍💻 Author

**Dhruvi Soni**

B.Tech Artificial Intelligence & Data Science
