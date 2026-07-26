// Import the HTTP module
// 'const' → Creates a constant variable
// 'http' → Stores the HTTP module
// 'require()' → Imports the module
const http = require("http");


// Create an HTTP server
// 'createServer()' listens for client requests
// 'req' → Request object
// 'res' → Response object
http.createServer((req,res)=>{

    // Check whether the requested page is "/"
    if(req.url=="/"){

        // Send HTTP Status Code 200 (Success)
        // Content-Type text/html tells the browser to render HTML
        res.writeHead(200,{
            "Content-Type":"text/html"
        });

        // Send HTML response
        res.write(`

            <!-- Main Heading -->
            <h1>Welcome to Home Page</h1>

            <!-- Link to About Page -->
            <a href="/about">About Us</a>

            <br><br>

            <!-- Link to Contact Page -->
            <a href="/contact">Contact Us</a>

        `);

        // End the response
        res.end();

    }

    // Check whether About page is requested
    else if(req.url=="/about"){

        // Send HTML response
        res.writeHead(200,{
            "Content-Type":"text/html"
        });

        // Display bold blue text
        // <b> → Bold
        // style="color:blue" → Blue text
        res.write(`<b style="color:blue">Welcome to LJ University</b>`);

        // End response
        res.end();

    }

    // Check whether Contact page is requested
    else if(req.url=="/contact"){

        // Send HTML response
        res.writeHead(200,{
            "Content-Type":"text/html"
        });

        // <i> → Italic
        // style="color:red" → Red text
        res.write(`<i style="color:red">Email : abc@ljinstitutes.edu.in</i>`);

        // End response
        res.end();

    }

    // If any other URL is requested
    else{

        // Send HTTP Status Code 404
        res.writeHead(404,{
            "Content-Type":"text/plain"
        });

        // Display Page not found
        res.end("Page not found");

    }

// Start server on Port 5000
}).listen(5000);


// Display message in terminal
console.log("Server Running");