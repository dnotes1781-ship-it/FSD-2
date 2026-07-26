# 📂 Practical 04 - Fetch Values from URL, Create File & Display Using HTTP Server

## 🎯 Aim

Write a Node.js program to:

1. Parse the given URL.
2. Fetch the file name (`exam.txt`) from the URL.
3. Extract query parameters (`c1`, `c2`, `c3`).
4. Create a file using the extracted filename.
5. Write the formatted text into the file.
6. Create an HTTP server.
7. Display the file content on the home page (`/`) in **red H1**.
8. Display **"Page not found"** for any other requested URL.

---

# 📝 Problem Statement

Given the URL:

```text
https://www.google.com/exam.txt?c1=Hello&c2=FSD2+T1+Test&c3=Welcome+to+LJU#AllTheBest
```

Perform the following tasks:

- Fetch the filename from the URL.
- Create `exam.txt`.
- Write the following data into the file:

```text
Hello!
Welcome to LJU FSD2 T1 Test
```

- Read the file and display it on the browser using an `<h1>` tag with **red color**.
- If any other page is requested, display:

```text
Page not found
```

---

# 💻 Source Code

```javascript
const http = require("http");
const fs = require("fs");
const url = require("url");

const link = "https://www.google.com/exam.txt?c1=Hello&c2=FSD2+T1+Test&c3=Welcome+to+LJU#AllTheBest";

const data = url.parse(link, true);

const file = data.pathname.split("/").pop();

const text = data.query.c1 + "!\n" + data.query.c3 + " " + data.query.c2;

fs.writeFile(file, text, (err)=>{

    if(err)
        throw err;

    console.log("File Created Successfully");

});

http.createServer((req,res)=>{

    if(req.url=="/"){

        fs.readFile(file,"utf8",(err,data)=>{

            res.writeHead(200,{
                "Content-Type":"text/html"
            });

            data=data.replace(/\n/g,"<br>");

            res.write(`<h1 style="color:red">${data}</h1>`);

            res.end();

        });

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

# ▶️ Console Output

```text
File Created Successfully
Server Running
```

---

# 🌐 Browser Output

Open:

```text
http://localhost:5000
```

Displays:

```text
Hello!

Welcome to LJU FSD2 T1 Test
```

- Displayed inside an **H1 tag**
- **Red Color**

---

Open:

```text
http://localhost:5000/about
```

Displays:

```text
Page not found
```

---

# 📄 Generated File (exam.txt)

```text
Hello!
Welcome to LJU FSD2 T1 Test
```

---

# 🧠 Logic

1. Import `http`, `fs`, and `url` modules.
2. Store the given URL.
3. Parse the URL using `url.parse()`.
4. Fetch the filename from the pathname.
5. Read query parameters (`c1`, `c2`, `c3`).
6. Create the output string.
7. Write the output into `exam.txt`.
8. Create an HTTP server.
9. If the user visits `/`, read the file and display it in red H1.
10. Otherwise display **Page not found**.

---

# 📚 Concepts Used

- Node.js
- HTTP Module
- URL Module
- File System Module
- url.parse()
- writeFile()
- readFile()
- HTTP Routing
- Query Parameters
- Template Literals
- HTML Response

---

# 🔄 Execution Flow

```text
Start
   │
   ▼
Import Modules
   │
   ▼
Parse URL
   │
   ▼
Fetch File Name
   │
   ▼
Create Text
   │
   ▼
Write exam.txt
   │
   ▼
Start HTTP Server
   │
   ├── "/" → Read File → Display in Red H1
   │
   └── Other URL → Page not found
   │
   ▼
End
```

---

# ❗ Common Mistakes

- Forgetting `true` in `url.parse(url, true)`.
- Hardcoding `"exam.txt"` instead of fetching it from the URL.
- Forgetting `"utf8"` in `readFile()`.
- Forgetting `res.end()`.
- Using `text/plain` instead of `text/html` for the home page.
- Forgetting to replace `\n` with `<br>`.

---

# 🎯 Viva Questions

### Q1. Why do we use the `url` module?

To parse a URL and access its pathname and query parameters.

---

### Q2. Why do we use `url.parse(url, true)`?

Because `true` converts the query string into an object.

---

### Q3. How is the filename extracted?

Using:

```javascript
data.pathname.split("/").pop();
```

---

### Q4. Why do we use `fs.writeFile()`?

To create a file and write data into it.

---

### Q5. Why do we use `fs.readFile()`?

To read the contents of `exam.txt` before sending them to the browser.

---

### Q6. Why do we replace `\n` with `<br>`?

Because HTML ignores newline characters. `<br>` displays the content on separate lines.

---

### Q7. Why do we use `Content-Type: text/html`?

To tell the browser that the response contains HTML.

---

# 📖 Conclusion

This practical demonstrates how to combine URL parsing, file handling, and HTTP server concepts in Node.js. It extracts data from a URL, creates a file, reads the file, and serves the content through a web server with basic routing.

---

## 👩‍💻 Author

**Dhruvi Soni**

B.Tech Artificial Intelligence & Data Science
