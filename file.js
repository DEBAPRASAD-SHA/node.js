const fs = require("fs");

// // synchronous... blocking
// fs.writeFileSync('./test.txt', 'i am Rock');


// Asynchronous... non-blocking request
// fs.writeFile('./test.txt', 'i am Rock Async', (err) => {});

// const result = fs.readFileSync("./contact.txt", "utf-8");
// console.log(result);

// fs.readFile("./contact.txt", "utf-8", (err, result) => {
//     if (err) {
//         console.log("Error", err)
//     } else {
//         console.log(result);
//     }
// });


fs.appendFileSync("./test.txt", `${Date.now()}i am Rock\n`);

// fs.cpSync("./test.txt", "./copy.txt");

// fs.unlinkSync("./copy.txt");

console.log(fs.statSync("./test.txt") .isFile());

fs.mkdirSync('my-docss/a/b', {recursive: true});
// fs.mkdirSync is used for creating file

// fs.rmdirSync('my-docss', {recursive: true});
// fs.rmSync('my-docss', {recursive: true});


``const os = require ("os");

console.log(os.cpus().length);

// console.log('1');
// Non-blocking....
 fs.readFile('contact.txt', 'utf-8', (err, result) =>{
// console.log(result);
 });

// console.log('2');
// console.log('3');
// console.log('4');

// Default thread pool size = 4
// Max? - 8core cpu - 8

