const fs = require("fs");

//* sync
const files = fs.readdirSync("./"); //? returns the files in the path
console.log(files);

//* Async
const files2 = fs.readdir("./", (err, file) => {
  console.log(err);
  console.log(file);
});
console.log("Hello");
