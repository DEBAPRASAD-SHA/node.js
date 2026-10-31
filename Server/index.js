const http = require("http");
const fs = require("fs");


const myServer = http.createServer((req, res) => {
   const log = `${Date.now()}: ${req.url} New req recevied\n`;
    fs.appendFile("log.txt", log, (err, data) =>{
        
        
        
        
        
        
        }

      
    });
});

myServer.listen(8000, () => console.log("server Started!"));