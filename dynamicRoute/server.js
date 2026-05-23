const express = require('express');
const apiRoute = require('./routes/apiroute');
const server = express();
const PORT = 3000;

server.use('/api', apiRoute);

server.use((req, res) => {
    res.status(404).send("404 Server Not Found!")
})

server.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});