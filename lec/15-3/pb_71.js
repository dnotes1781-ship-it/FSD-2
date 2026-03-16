// Write a Node.Js program to sort an interger array, where all element 
// are available in a file separated by white space. Print sorted array 
// elements on node.js server.

ps = require('fs')
ps.writeFileSync("demo.txt","50 -1 99 100 20 0 56 78 59")
data = ps.readFileSync("demo.txt","Utf-8")
data = data.split(" ")
d = data.sort((a,b) => a-b)
console.log(d)
