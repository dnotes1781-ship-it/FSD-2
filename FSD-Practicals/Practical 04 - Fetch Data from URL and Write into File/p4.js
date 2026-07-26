// Import File System module
// Used to create and write files
const fs = require("fs");

// Import URL module
// Used to parse the URL
const url = require("url");

// Store the given URL in a variable
const myURL = "https://www.google.com/exam.txt?c1=Hello&c2=FSD2+T1+Test&c3=Welcome+to+LJU#AllTheBest";

// Parse the URL
// true converts query parameters into an object
const data = url.parse(myURL, true);

// Extract the file name from the URL path
// pathname = "/exam.txt"
// split("/") → ["", "exam.txt"]
// pop() returns the last element ("exam.txt")
const fileName = data.pathname.split("/").pop();

// Extract query parameters
const c1 = data.query.c1;
const c2 = data.query.c2;
const c3 = data.query.c3;

// Create the final content
const content = `${c1}!\n${c3} ${c2}`;

// Write data into the file
fs.writeFile(fileName, content, function(err)
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("File Created Successfully");
        console.log(content);
    }
});