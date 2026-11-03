const http = require("http");
const express = require('express');

const app = express();


app.get("/", (req, res) => {
    return res.send("Hello from Home page");
});

app.get("/about", (req, res) => {
    return res.send("Hello from About page" + 
        " hey " + 
        req.query.name + 
        " you are " + 
        req.query.age
    );
});


const myServer = http.createServer(app);

myServer.listen(8000, () => console.log("server Started!"));