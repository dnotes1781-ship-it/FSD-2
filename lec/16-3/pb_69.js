// Write node.js script to copy content of one file to the other file. data
// should be fetched from source.txt and insert to destination.txt

const fs = require("fs");

fs.writeFile(
  "source.txt",
  "Hello! This file was created automatically.",
  (err) => {
    if (err) throw err;
    console.log("source.txt created");

    fs.copyFile("source.txt", "destination.txt", (err) => {
      if (err) throw err;
      console.log("Content copied to destination.txt");
      fs.readFile("destination.txt", "utf-8", (err, data) => {
        if (err) throw err;
        console.log("Content of destination.txt: " + data);
      });
    });
  },
);