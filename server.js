const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const categoriesData = require('./data/categories');

// Create The Express App
const app = express();

// Create Middleware to serve app
app.use('/', serveStatic(path.join(__dirname, '/public')));
app.get('/api/categories', function(req, res) {
    res.json(categoriesData);
});
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

// CREATE DEFAULT PORT TO SERVE THE APP
const port = process.env.PORT || 5000;

app.listen(port);
console.log("Server started on port " + port);