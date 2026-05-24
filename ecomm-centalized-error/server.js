const express = require('express');
const productRoute = require('./routes/productsRoute');
const userRoute = require('./routes/usersRoute');
const cartRoute = require('./routes/cartsRoute');
const PORT = 3000;

const server = express();

server.use((req, res, next) => { 
    console.log(`Request: ${req.method} - URL: ${req.url}`); 
    next();
});

server.use('/products', productRoute);
server.use('/users', userRoute);
server.use('/carts', cartRoute);

server.use((req, res) => { res.status(404).send("404: Page Not Found!"); });

server.use((err, req, res, next) => {
    console.error(err.stack);

    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error',
    });
});


server.listen(PORT, () => { console.log(`Server running at PORT: ${PORT}`); });