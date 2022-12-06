const url = require("url");
var id = undefined;

require("http").createServer(function(req, res){
    var ru = url.parse(req.url);
    res.setHeader("Access-Control-Allow-Origin", "*");
    if(ru.pathname == "/set") return (id = ru.query?.split("=")?.[1] || undefined, res.end());
    if(ru.pathname == "/get") return res.end(id || "");
}).listen(8080);