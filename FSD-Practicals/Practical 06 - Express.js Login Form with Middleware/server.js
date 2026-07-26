// Import Express module
// 'const' → Creates a constant variable
// 'express' → Stores Express module
// 'require()' → Imports Express package
const express = require("express");


// Create Express application
// 'app' is used to create routes and start the server
const app = express();


// Middleware
// Reads data sent from HTML form
// urlencoded() converts form data into JavaScript object
// extended:true allows parsing complex data
app.use(express.urlencoded({extended:true}));


// Create GET route
// '/' means Home Page
app.get("/",(req,res)=>{

    // Send index.html file to browser
    // __dirname returns current folder path
    res.sendFile(__dirname+"/index.html");

});


// Create POST route
// '/check' is called after clicking Submit button
app.post("/check",

// First Middleware
(req,res,next)=>{

    // req.body.username
    // Reads username entered in HTML form
    if(req.body.username=="admin"){

        // Go to next middleware
        next();

    }

    else{

        // Display warning message
        // h1 → Heading
        // color:red → Red text
        res.send("<h1 style='color:red'>Warning Message</h1>");

    }

},

// Second Middleware
(req,res)=>{

    // Executes only when next() is called
    res.send("<h1>Welcome... admin</h1>");

}

// End POST Route
);


// Start server
// Server listens on Port 5000
app.listen(5000);


// Display message in terminal
console.log("Server Running");