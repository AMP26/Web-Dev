const express = require('express');

const server = express();

server.use((req, res, next) => {
    req.user = 'Guest!'
    next();
});

server.get('/', (req, res) => {
    res.send(`<h1>Welcome</h1> ${req.user}`);
})

const PORT = 3000;
server.listen(PORT, () => {
    console.log("Server running on PORT: ", PORT);
})