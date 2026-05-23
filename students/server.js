const express = require('express');
const studentRoute = require('./routes/students')
const courseRoute = require('./routes/courses');
const PORT = 3000;

const server = express();

server.use((req, res, next) => {
    console.log(`Request: ${req.method} - URL: ${req.url}`);
    next();
});

server.use('/students', studentRoute);
server.use('/courses', courseRoute);

server.use((req, res) => { res.status(400).send("404 Page Not Found!"); });

server.listen(PORT, () => { console.log(`Server Runnig On PORT: ${PORT}`); });