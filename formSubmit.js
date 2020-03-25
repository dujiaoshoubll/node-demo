const http = require("http");
const querystring = require("querystring");
const url = require("url");

let server = http.createServer((req, res) => {
    // querystring
    let [url1, query1] = req.url.split("?");
    let get1 = querystring.parse(query1);

    let {pathname, query} = url.parse(req.url,true);
    console.log(get1);
    console.log(pathname, query);
});
server.listen(8080);
