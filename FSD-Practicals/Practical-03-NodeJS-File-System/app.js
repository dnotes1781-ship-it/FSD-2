// Import the File System module
// 'const' creates a constant variable
// 'fs' stores the File System module
// 'require()' imports the built-in fs module
const fs = require("fs");


// Create (or overwrite) the file help.txt
// writeFile() writes data into a file asynchronously
fs.writeFile(

    // File name
    "help.txt",

    // Data to write into the file
    "You are creating a file",

    // Callback function executed after writing is complete
    function(err)
    {
        // Check whether any error occurred
        if(err)
        {
            console.log(err);
        }

        // If no error occurs
        else
        {
            console.log("File Created Successfully");

            // Append new data to the same file
            fs.appendFile(

                // File name
                "help.txt",

                // Data to append
                "\nyou are appending data",

                // Callback after append operation
                function(err)
                {
                    // Check for append error
                    if(err)
                    {
                        console.log(err);
                    }

                    else
                    {
                        console.log("Data Appended Successfully");

                        // Read the file contents
                        fs.readFile(

                            // File name
                            "help.txt",

                            // Convert Buffer into readable text
                            "utf8",

                            // Callback after reading
                            function(err,data)
                            {
                                // Check for read error
                                if(err)
                                {
                                    console.log(err);
                                }

                                else
                                {
                                    // Display file contents
                                    console.log(data);

                                    // Final message
                                    console.log("Thanks for using my program");
                                }
                            }

                        );
                    }
                }

            );
        }
    }

);
