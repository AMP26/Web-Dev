const errorHandler = (err, req, res, next) => {
    console.error('Error logged: ', err.stack);

    if(err.code === 'ER_DUP_ENTRY') {
        return res.status(400).json({ error: 'Email already exists' });
    }

    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    res.status(statusCode).json({
        status: 'error',
        error: message
    });
};

module.exports = errorHandler;