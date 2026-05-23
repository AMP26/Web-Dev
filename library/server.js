const express = require('express');
const libRoute = require('./routes/books')
const PORT = 3000;
const server = express();

server.use((req, res, next) => {
    console.log(`Request: ${req.method} - URL: ${req.url}`);
    next();
});

server.use('/books', libRoute);

server.use((req, res) => {
    res.status(404).send("404 Page Not Found")
})

server.listen(PORT, () => {
    console.log(`Server listening to PORT: ${PORT}`);
});