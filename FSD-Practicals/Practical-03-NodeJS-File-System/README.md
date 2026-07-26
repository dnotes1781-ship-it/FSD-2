# 📂 Practical 03 - Node.js File System (Write, Append & Read File)

## 🎯 Aim

Write a Node.js program to:

1. Create a file named `help.txt`.
2. Write the text **"You are creating a file"** into it.
3. Append the text **"you are appending data"** to the same file.
4. Read the file contents.
5. Display the file contents on the console.
6. Print **"Thanks for using my program"** after reading the file.

**Note:** All operations should be asynchronous and executed in the correct sequence.

---

# 📝 Problem Statement

Write a Node.js script that:

- Creates a file named `help.txt`.
- Writes `"You are creating a file"`.
- Appends `"you are appending data"`.
- Reads and prints the file contents.
- Finally prints:

```text
Thanks for using my program
```

The sequence must be:

```text
Write
   ↓
Append
   ↓
Read
   ↓
Print Final Message
```

---

# 💻 Source Code

```javascript
const fs = require("fs");

fs.writeFile("help.txt", "You are creating a file", function(err){

    if(err){
        console.log(err);
    }

    else{

        console.log("File Created Successfully");

        fs.appendFile("help.txt", "\nyou are appending data", function(err){

            if(err){
                console.log(err);
            }

            else{

                console.log("Data Appended Successfully");

                fs.readFile("help.txt","utf8",function(err,data){

                    if(err){
                        console.log(err);
                    }

                    else{

                        console.log(data);

                        console.log("Thanks for using my program");

                    }

                });

            }

        });

    }

});
```

---

# ▶️ Output

```text
File Created Successfully
Data Appended Successfully

You are creating a file
you are appending data

Thanks for using my program
```

---

# 🧠 Logic

1. Import the File System (`fs`) module.
2. Create a file using `writeFile()`.
3. Append new text using `appendFile()`.
4. Read the file using `readFile()`.
5. Display the file contents.
6. Print the final message.

---

# 📚 Concepts Used

- Node.js
- File System (`fs`) Module
- Asynchronous Programming
- Callback Functions
- writeFile()
- appendFile()
- readFile()
- UTF-8 Encoding

---

# 🔄 Execution Flow

```text
Start
   │
   ▼
Import fs
   │
   ▼
writeFile()
   │
   ▼
appendFile()
   │
   ▼
readFile()
   │
   ▼
Display File Content
   │
   ▼
Print Final Message
   │
   ▼
End
```

---

# ❗ Common Mistakes

- Calling `readFile()` before `appendFile()` completes.
- Forgetting `"utf8"` in `readFile()`.
- Using `writeFile()` instead of `appendFile()` to add new data.
- Not checking for errors using `if(err)`.

---

# 🎯 Viva Questions

### Q1. What is the `fs` module?

The `fs` (File System) module is a built-in Node.js module used to perform file operations like reading, writing, appending, and deleting files.

---

### Q2. Why do we use callback functions?

Because file operations are asynchronous. Callbacks ensure the next operation starts only after the previous one has completed.

---

### Q3. Difference between `writeFile()` and `appendFile()`?

| writeFile() | appendFile() |
|-------------|--------------|
| Creates or overwrites a file | Adds new data to the end of an existing file |

---

### Q4. Why is `"utf8"` used in `readFile()`?

It converts the file data from a **Buffer** into readable text.

---

# 📖 Conclusion

This practical demonstrates how to perform asynchronous file operations in Node.js using the File System module while maintaining the correct execution sequence with callback functions.

---

## 👩‍💻 Author

**Dhruvi Soni**

B.Tech Artificial Intelligence & Data Science
