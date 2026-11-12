const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

//Middleware - plugin
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/api/users", (req, res) => {
    console.log("POST API CALLED!");

    console.log(req.body);

    return res.status(201).json({
        status: "success",
        message: "API is working"
    });
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
                                                                                
                                                                                                                                        