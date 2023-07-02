const http = require("http")
const server = http.createServer(
    (_, res)=>{
        console.log("Request recieved !!")
        while(1);
        res.end("Hello world !!")
    });

server.listen(8080);
console.log("Server listening at 8080")