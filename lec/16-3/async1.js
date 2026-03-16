const ps = require("fs");

ps.writeFile("sort.txt", "This is first line",
     (err) => 
          { ps.appendFile("sort.txt", "new line Added",
                 (err) => { ps.rename("sort.txt", "sort1.txt",
                     (err) => { console.log("fileoperation completed") })
                   })
                })