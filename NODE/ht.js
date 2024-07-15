const http=require("http");

const server=http.createServer((req,res)=>{
    //Set the reponse HTTP header with HTTPS status and Content type
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('Hello world!');
});

const port=4000;
server.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}/`)
});