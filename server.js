const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

// Create The Express App
const app = express();

// Create Middleware to serve app
app.use('/', serveStatic(path.join(__dirname, '/public')));
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

// CREATE DEFAULT PORT TO SERVE THE APP
const port = process.env.PORT || 5000;

app.listen(port);
console.log("Server started on port " + port);