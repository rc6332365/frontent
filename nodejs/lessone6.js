var http = require('http');
const server = http.createServer((req, resp)=>{
    resp.writeHead(200, {'Content-Type': 'text/plain'});

    for (var i = 1; i<=6; i++)
    {
        let row = '';
        for ( let j= 1; j<=i; j++)
    {
          row += '*';
    }
    resp.write( row + '\n');
    }
    resp.end();
});
server.listen(5000);
console.log("server ready...");