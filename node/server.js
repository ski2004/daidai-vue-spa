const express = require('express');
const serveStatic = require("serve-static");
const path = require('path');
const app = express();
console.log(__dirname)
app.use(serveStatic(path.join('../', 'dist')));
const port = 3006;
app.listen(port);
console.log('Server listening on ' + port)