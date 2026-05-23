const express = require('express');
const productRoute = require('./routes/products');
const categoryRoute = require('./routes/categories');
const PORT = 3000;

const server = express();

server.use('/products', productRoute);
server.use('/categories', categoryRoute);

server.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});