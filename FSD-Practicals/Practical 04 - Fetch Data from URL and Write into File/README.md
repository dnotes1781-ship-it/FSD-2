# 📂 Practical 04 - Fetch Data from URL and Write into File

## 🎯 Aim

Write a Node.js program to:

1. Parse the given URL.
2. Fetch the file name from the URL.
3. Extract query parameters.
4. Create a file using the fetched file name.
5. Write the required formatted output into the file.

---

# 📝 Problem Statement

Given the following URL:

```text
https://www.google.com/exam.txt?c1=Hello&c2=FSD2+T1+Test&c3=Welcome+to+LJU#AllTheBest
```

Perform the following operations:

- Fetch the filename (`exam.txt`) from the URL.
- Write the following content into the file.

```text
Hello!
Welcome to LJU FSD2 T1 Test
```

---

# 💻 Source Code

```javascript
const fs = require("fs");
const url = require("url");

const myURL = "https://www.google.com/exam.txt?c1=Hello&c2=FSD2+T1+Test&c3=Welcome+to+LJU#AllTheBest";

const data = url.parse(myURL, true);

const fileName = data.pathname.split("/").pop();

const c1 = data.query.c1;
const c2 = data.query.c2;
const c3 = data.query.c3;

const content = `${c1}!\n${c3} ${c2}`;

fs.writeFile(fileName, content, function(err){

    if(err){
        console.log(err);
    }

    else{

        console.log("File Created Successfully");

        console.log(content);

    }

});
```

---

# ▶️ Output (Console)

```text
File Created Successfully

Hello!
Welcome to LJU FSD2 T1 Test
```

---

# 📄 Generated File (exam.txt)

```text
Hello!
Welcome to LJU FSD2 T1 Test
```

---

# 🧠 Logic

1. Import the `fs` and `url` modules.
2. Store the URL in a variable.
3. Parse the URL using `url.parse()`.
4. Extract the file name from the URL path.
5. Read query parameters (`c1`, `c2`, `c3`).
6. Create the required text.
7. Write the text into the file using `fs.writeFile()`.

---

# 📚 Concepts Used

- Node.js
- URL Module
- File System Module (fs)
- url.parse()
- Query Parameters
- String Interpolation (Template Literals)
- split()
- pop()

---

# 🔄 Execution Flow

```text
Start
   │
   ▼
Import Modules
   │
   ▼
Store URL
   │
   ▼
Parse URL
   │
   ├── Get File Name
   │
   └── Get Query Parameters
           │
           ▼
Create Output String
           │
           ▼
Write into File
           │
           ▼
Display Success Message
           │
           ▼
End
```

---

# ❗ Common Mistakes

- Forgetting to pass `true` in `url.parse(url, true)`.
- Hardcoding `"exam.txt"` instead of fetching it from the URL.
- Using `data.c1` instead of `data.query.c1`.
- Forgetting to use `split("/")` and `pop()` to extract the filename.

---

# 🎯 Viva Questions

### 1. What is the purpose of the `url` module?

It is used to parse a URL into different parts such as protocol, hostname, pathname, query parameters, and hash.

---

### 2. Why do we use `url.parse(url, true)`?

The `true` argument converts query parameters into an object, making them easier to access.

---

### 3. Why do we use `split("/")`?

It separates the URL path into different parts.

Example:

```text
/exam.txt
```

becomes

```javascript
["", "exam.txt"]
```

---

### 4. Why do we use `pop()`?

It returns the last element of an array, which is the filename (`exam.txt`).

---

### 5. Which module is used to create files?

The **File System (`fs`)** module.

---

# 📖 Conclusion

This practical demonstrates how to parse a URL, extract query parameters and the filename, and write formatted data into a file using Node.js built-in modules.

---

## 👩‍💻 Author

**Dhruvi Soni**

B.Tech Artificial Intelligence & Data Science
