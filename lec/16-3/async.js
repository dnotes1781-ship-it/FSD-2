const ps = require("fs");

ps.writeFile("file1.txt", "This is async Function", (err) => {
  if (err) throw err;
  console.log("file write");
});

ps.readFile("file1.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

ps.appendFile("file1.txt", "\nThis is appended text", (err) => {
  if (err) throw err;
  console.log("file appended");
});

ps.rename("file1.txt", "new.txt", (err) => {
  if (err) throw err;
  else console.log("File renamed");
});

ps.copyFile("new.txt", "new1.txt", (err) => {
  console.log("file copied");
});

ps.unlink("new.txt", (err) => {
  console.log("file deleted");
});

