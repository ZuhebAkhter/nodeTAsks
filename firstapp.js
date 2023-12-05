const http=require("http");


const server=http.createServer((req,res) => {
    const url= req.url;
    if(url === "/home"){
        res.setHeader("Content-Type","text/html");
        res.write("<html>")
        res.write('<head><title>Zuheb Node Page</title></head>')
        res.write('<body><h1>This is Home Page</h1></body>')
        res.write("</html>")
         return res.end();
    }else if(url === "/about"){
        res.write("<html>")
        res.write('<head><title>Zuheb Node Page</title></head>')
        res.write('<body><h1>This is About  Page</h1></body>')
        res.write("</html>")
        res.end();
    }
    
 
})

server.listen(4000);