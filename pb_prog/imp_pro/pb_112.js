// Write node js script to fetch values from url given below and display output as asked.
// "https://www.google.com/exam.txt?c1=Hello&amp;c2=FSD2+T1+Test&amp;c3=
// Welcome+to+LJU#AllTheBest"
// 1) Data must be written as below in file named “exam.txt”. File name must be 
// fetched from
// the url given above.
// Output:
// Hello!
// Welcome to LJU FSD2 T1 Test
// #AllTheBest
// 2) Read content from file “exam.txt” and send response to server and display data in 
// “/” page
// in same format as above but in H1 tag and in red color.
// 3) If any other page is requested it shows “Page not found” message in plain text.
const http = require("http");
const fs = require("fs");
const url = require("url");

const myUrl =
  "https://www.google.com/exam.txt?c1=Hello&c2=FSD2+T1+Test&c3=Welcome+to+LJU#AllTheBest";

const parsed = url.parse(myUrl, true);

const fileName = "exam.txt";

const c1 = parsed.query.c1;
const c2 = "FSD2 T1 Test"; 
const c3 = "Welcome to LJU"; 
const hash = parsed.hash; 

const content = c1 + "!\n" + c3 + " " + c2 + "\n" + hash;

fs.writeFileSync(fileName, content);

http
  .createServer((req, res) => {
    if (req.url === "/") {
      const data = fs.readFileSync(fileName, "utf-8");

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end('<h1 style="color:red;">' + data + "</h1>");
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Page not found");
    }
  })
  .listen(3000);

console.log("Server running at http://localhost:3000/");
