// Import the HTTP module
// 'const' → Declares a constant variable
// 'http' → Stores the built-in HTTP module
// 'require()' → Imports the module
// "http" → Module used to create a web server
const http = require("http");

// Import the File System module
// Used to create, write and read files
const fs = require("fs");

// Import the URL module
// Used to parse (break) the URL into different parts
const url = require("url");


// Store the given URL inside a variable
// 'const' → Constant variable
// 'link' → Variable name
const link = "https://www.google.com/exam.txt?c1=Hello&c2=FSD2+T1+Test&c3=Welcome+to+LJU#AllTheBest";


// Parse the URL
// 'url.parse()' → Breaks the URL into protocol, host, pathname, query, hash etc.
// 'link' → URL to parse
// 'true' → Converts query parameters into an object
const data = url.parse(link, true);


// Extract file name from the URL
// 'pathname' → Returns "/exam.txt"
// 'split("/")' → Splits the string at '/'
// Result becomes ["", "exam.txt"]
// 'pop()' → Returns the last element of the array
// Final value = "exam.txt"
const file = data.pathname.split("/").pop();


// Create the text that will be written into the file
// 'data.query.c1' → Hello
// '!' → Adds an exclamation mark
// '\n' → Moves to the next line
// 'data.query.c3' → Welcome to LJU
// 'data.query.c2' → FSD2 T1 Test
// Final Output:
// Hello!
// Welcome to LJU FSD2 T1 Test
const text = data.query.c1 + "!\n" + data.query.c3 + " " + data.query.c2;


// Create (or overwrite) the file
// 'fs.writeFile()' → Writes data into a file asynchronously
fs.writeFile(

    // File name fetched from the URL
    file,

    // Content to write into the file
    text,

    // Callback function executed after writing completes
    (err) => {

        // Check if an error occurred
        if(err)

            // Throw the error and stop execution
            throw err;

        // If no error occurs
        console.log("File Created Successfully");

    }

);


// Create the HTTP server
// 'http.createServer()' → Creates a web server
// '(req,res)' → Callback runs whenever a client sends a request
// 'req' → Request object (contains URL requested by the client)
// 'res' → Response object (used to send data back to the browser)
http.createServer((req,res)=>{

    // Check whether the requested URL is the home page "/"
    if(req.url=="/"){

        // Read the contents of exam.txt
        // 'utf8' converts file data into readable text
        fs.readFile(

            // File name
            file,

            // Encoding
            "utf8",

            // Callback after reading
            (err,data)=>{

                // Send HTTP Status Code 200 (Success)
                // Content-Type text/html tells the browser to render HTML
                res.writeHead(200,{
                    "Content-Type":"text/html"
                });

                // Replace newline characters (\n)
                // with HTML line break (<br>)
                // '/\n/g' means replace every newline in the string
                data=data.replace(/\n/g,"<br>");

                // Send the file content
                // <h1> → Displays large heading
                // style="color:red" → Displays text in red color
                res.write(`<h1 style="color:red">${data}</h1>`);

                // End the response
                res.end();

            }

        );

    }

    // If any page other than "/" is requested
    else{

        // Send HTTP Status Code 404 (Page Not Found)
        res.writeHead(404,{
            "Content-Type":"text/plain"
        });

        // Send plain text response
        res.end("Page not found");

    }

// Start the server on Port 5000
}).listen(5000);


// Display a message in the terminal
console.log("Server Running");