const express = require('express');
const orderRoutes = require('./routes/orders');
const userRoutes  = require('./routes/users');
const PORT = 3000;
const server = express();

server.use(express.json());

server.use('/orders', orderRoutes);
server.use('/users', userRoutes);


server.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
})