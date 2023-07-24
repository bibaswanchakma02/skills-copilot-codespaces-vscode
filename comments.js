//Create web server 
var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');

// Set up body parser to parse JSON
app.use(bodyParser.json());

// Set up static files directory
app.use(express.static(path.join(__dirname, 'public')));

// Set up URL path for comments
app.get('/comments.json', function(req, res) {
    fs.readFile('comments.json', function(err, data) {
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
    });
});

// Set up URL path for posting comments
app.post('/comments.json', function(req, res) {
    fs.readFile('comments.json', function(err, data) {
        var comments = JSON.parse(data);
        comments.push(req.body);
        fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function(err) {
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Cache-Control', 'no-cache');
            res.send(JSON.stringify(comments));
        });
    });
});

// Start the web server
app.listen(3000);
console.log('Webserver started on port 3000');
