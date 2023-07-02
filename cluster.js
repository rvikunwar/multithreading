const cluster = require("cluster")

if(cluster.isMaster){
    console.log(`master process ${process.pid}`);
    const cpuCount = require('os').cpus().length;

    for(let i=0; i<cpuCount; i++){
        cluster.fork();
    }

} else {
    const http = require("http")
    const server = http.createServer(
        (_, res) => {
            console.log(`request accepted!!, worker-id: ${cluster.worker.id}`)
            while(1);
            res.end("Hello world!!")
        }
    )
    server.listen(8080);
    console.log("Server listening on 8080")
}