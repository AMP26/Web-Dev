const express = require('express');
const dotenv = require('dotenv');
const studentRoutes = require('./src/routes/studentRoute');
const errorHandler = require('./src/middlewares/errorhandler');

dotenv.config();
require('./src/config/db');

const server = express();
server.use(express.json());

server.use('/api/students', studentRoutes);

server.use(errorHandler);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => { console.log(`Server running at PORT: ${PORT}`); })