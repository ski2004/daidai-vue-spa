const express = require('express');
const serveStatic = require("serve-static");
const path = require('path');
const app = express();
app.use(serveStatic(__dirname+'/dist/'));
console.log(__dirname+'/dist/')
const port = 80;
app.listen(port);
console.log('Server listening on ' + port)