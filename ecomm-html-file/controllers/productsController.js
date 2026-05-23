const productService = require("../services/productService");

const getProducts = (req, res) => { productService.getProducts(req, res) };

module.exports = { getProducts };