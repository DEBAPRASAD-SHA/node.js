const fs = require("fs");

// // synchronous...
// fs.writeFileSync('./test.txt', 'i am Rock');


// Asynchronous...
// fs.writeFile('./test.txt', 'i am Rock Async', (err) => {});

const result = fs.readFileSync("./contact.txt", "utf-8");
console.log(result);