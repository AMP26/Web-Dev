const path = require('path');

const productService = {
    getProducts(req, res) {
        res.sendFile(path.join(__dirname,'..','view','product.html'));
    }
}

module.exports = productService;