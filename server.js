const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const categoriesData = require('./data/categories');
const citiesData = require('./data/cities');
const itemsData = require('./data/items');

// Create The Express App
const app = express();

// Create Middleware to serve app
app.use('/', serveStatic(path.join(__dirname, '/public')));

// Api
// Shows all the cities available
app.get('/api/cities', function(req, res) {
    res.json(citiesData);
});
// Shows all the categories for a city
app.get('/api/:city', function(req, res) {
    res.json(categoriesData);
});
// This is going to show all the items for that category
app.get('/api/:city/:category', function(req, res) {
    let filteredData;
    if(req.query.min_price != undefined) {
        filteredData = itemsData.filter((item) => {
            return item.city == req.params.city 
            && item.category == req.params.category
            && item.price >= req.query.min_price
            && item.price <= req.query.max_price;
        });
    } else {
        filteredData = itemsData.filter((item) => {
            return item.city == req.params.city 
            && item.category == req.params.category;
        });
        
    }
    res.json(filteredData);
});
// Show all the itmes for that listing
app.get('/api/:city/:categories/:listing', function(req, res) {
    res.json(itemsData);
});
// Show the item that was selected
app.get('/api/:city/:categories/:listing/:item', function(req, res) {
    res.json(itemsData);
});

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

// CREATE DEFAULT PORT TO SERVE THE APP
const port = process.env.PORT || 5000;

app.listen(port);
console.log("Server started on port " + port);