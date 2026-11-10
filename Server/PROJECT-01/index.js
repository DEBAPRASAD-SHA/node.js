const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

//Middleware - plugin
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  fs.appendFile('log.txt', `\n${Date.now()}: ${req.ip}: ${req.method}: ${req.path}`, (err,data) => {
next();
  })
  
});

  //Routes                                                                                                                                                                                                                                                                                                       
    app.get("/users", (req, res) => {                                           
  const html = `                                                                
    <ul>                                                                        
        ${users.map((user) => `<li>${user.first_name} </li>`).join("")}         
    </ul>                                                                       
    `;                                                                          
  res.send(html);                                                               
});                                                                             
                                                                                
                                                                                
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
{  
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   