const http=require("http");
const fs=require("fs");
const path = require("path");

const server=http.createServer((req,res) => {
    const url= req.url;
    const method=req.method;
    const mes="message.txt";
    
    if(url === "/home"){
        res.setHeader("Content-Type","text/html");
        res.write("<html>")
        res.write('<head><title>Zuheb Node Page</title></head>')
        res.write('<body><form action="/message" method="POSt"><input type="text" name="message"><button>Send</button></form></body>')
        res.write("</html>")
         return res.end();
    }
    if(url === "/message" &&  method==="POST"){
        const body=[]
        req.on("data",(chunk)=>{
      body.push(chunk)
        })
        req.on("end",()=>{
            const parseBody= Buffer.concat(body).toString();
         const message=parseBody.split("=")[1];
         fs,fs.writeFileSync('message.txt',message)
        })
        fs.readFile(mes,(err,data)=>{
          console.log(data)
        })
        res.statusCode=302;
        res.setHeader("Location","/")
        return res.end();
    }
    
 
})

server.listen(4000);