// Write a Node.Js program for following action
// 1.Write a file having five random elements separated by white 
// space in .txt file.
// 2.append sorted array of these 5 elements in same file along with 
// message : “Sorted array:” in new line.
// 3.Find maximum number from that and append with message 
// “maximum number=” in same file. 



const fs = require("fs");
fs.writeFile("myFile.txt", "5 2 9 1 5 6", (err) => {
  if (err) throw err;
  console.log("File has been created");
  fs.readFile("myFile.txt", "utf-8", (err, data) => {
    if (err) throw err;
    let arr = data.split(" ").map(Number);
    arr.sort((a, b) => a - b);
    fs.appendFile("myFile.txt", "\nSorted array: " + arr.join(" "), (err) => {
      if (err) throw err;
      console.log("Sorted array has been appended");
      let max = Math.max(...arr);
      fs.appendFile("myFile.txt", "\nmaximum number= " + max, (err) => {
        if (err) throw err;
        console.log("Maximum number has been appended");
      });
    });
  });
});
