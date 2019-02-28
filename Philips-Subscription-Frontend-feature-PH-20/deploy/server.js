var express = require("express");
var serveStatic = require("serve-static");

var app = express();
app.use(require("connect-history-api-fallback")());
app.use(serveStatic("./dist"));
var port = 8090;
app.listen(port);

console.log("server started " + port);
