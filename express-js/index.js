const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.send('<h1>Hello</h1>')
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});