const http = require("http");
const fs = require("fs");
const url = require("url");
const express = require('express');

const app = express();


app.get('/', (req, res) => {
    return res.send('Hello from Home page');
});

function myHanndler(req, res) {
}

const myServer = http.createServer(myHanndler); {
   if(req.url === "/favicon.ico") return res.end();
    const log = `${Date.now()}: ${req.method} ${req.url} New req recevied\n`;
    const myUrl = url.parse(req.url);
    // console.log(myUrl);
  
    fs.appendFile("log.txt", log, (err, data) =>{
              switch(myUrl.pathname){                   
                  case '/':       
            if(req.mthod==="GET") res.end("Home page");
                  break;                                
                  case '/about': 
                  const username = myUrl.query.myname;
                  res.end(`Hi, ${username}`); 
                  break;                     
                  case "/search":
                    const search = myUrl.query.search_query;
                    res.end("Here are your results for" + search);
                    case '/signup':
                        if(req.method === 'GET') res.end("This is  a signup form");
                        else is (req.methid === "POST"); {
                            res.end("Sucess");
                        }
                  default:
                    res.end("404 Not Found");
              }                                         
    });
});

myServer.listen(8000, () => console.log("server Started!"));