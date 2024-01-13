const http = require("http");
const express= require("express")

const app=express();

//crrating server
const server = http.createServer(app);

app.use((req,res,next) => {
    console.log("1st middleware");
    next();
})

app.use((req,res,next) => {
    console.log("2st middleware")
    res.send('<h1>thus is middleware 2</h1>')

})

server.listen(4000);
