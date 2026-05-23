const express = require('express');
const productRoute = require('./routes/products');
const categoryRoute = require('./routes/categories')
const PORT = 3000;

const server = express();

server.use('/products', productRoute);
server.use('/categories', categoryRoute);

server.use((req, res) => {
    res.status(404).send("<h1>404 Page Not Found</h1>")
});

server.listen(PORT, () => {
    console.log(`Server running n PORT: ${PORT}`);
});
