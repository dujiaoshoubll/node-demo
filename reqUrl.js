const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res) => {
    console.log(req.url);
    fs.readFile(`html/${req.url}`, (err, buffer) => {
        console.log(err);
        console.log(buffer.toString());
        if (err) {
            res.writeHeader(404);
            res.write("not Found");
            res.end();
        } else {
            res.write(buffer);
            res.end();
        }
    });
});
server.listen(8080);
