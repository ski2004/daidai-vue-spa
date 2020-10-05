const express = require('express');
const serveStatic = require("serve-static");
const path = require('path');
const app = express();
//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')))

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
	res.sendFile(path.join(__dirname, '/dist/index.html'))
})
console.log(__dirname+'/dist/')
const port = 3006;
app.listen(port);
console.log('Server listening on ' + port)