const productService = require('../services/productService');

const addProduct = (req, res) => {

    const result = productService.addProduct(req.body);

    res.json(result);
};

module.exports = {
    addProduct
};