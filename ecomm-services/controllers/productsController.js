const productService = require("../services/productService");

const getProducts = (req, res) => { productService.getProducts(req, res) };

const getProductById = (req, res) => { productService.getProductById(req, res); };

const addProduct = (req, res) => { productService.addProduct(req, res); };


module.exports = { getProducts, getProductById, addProduct };