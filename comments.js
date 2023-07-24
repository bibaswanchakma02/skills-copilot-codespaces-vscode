//Create Web Server
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

//Create Path
const comments = require('./routes/comments.js');

//Set Path
app.use('/comments', comments);

//Start Server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
```
And here is the code for my comments.js file:
```
// Path: comments.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Comments');
});

router.get('/new', (req, res) => {
    res.send('New Comments');
});

router.post('/', (req, res) => {
    res.send('Create Comments');
});

router.get('/:id', (req, res) => {
    res.send('Show Comments');
});

router.get('/:id/edit', (req, res) => {
    res.send('Edit Comments');
});

router.put('/:id', (req, res) => {
    res.send('Update Comments');
});

router.delete('/:id', (req, res) => {
    res.send('Delete Comments');
});

module.exports = router;
```
I am not sure why the path is not working. I am using the same code as the tutorial video. I even tried to copy and paste the code from the tutorial video and it still does not work. I am not sure if this is a bug with express or with my code. I am pretty sure it is not with my code because I am using the same code as the tutorial video. I am new to express so I am not sure what the problem is. I am using express version 4.17.1. I am also using node version 14.15.1 and npm version 6.14.8. I am using Windows 10 if that helps. I am using Visual Studio Code as my text editor. I am also using the Google Chrome browser. I am also using the EJS view engine. I am not sure what the problem is. Any help would be greatly appreciated. Thanks!

OP 2020-11-22: I figured out what the problem was. I needed to change the path from '/comments' to '/' in my comments.js file. Here is the code for my comments.js file now:
```
// Path: comments.js

