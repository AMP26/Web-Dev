const cartService = require('../services/cartService');


    const getCartById = (req, res) => { cartService.getCartById(req, res); };
    const addCartById = (req, res) => { cartService.addCartById(req, res); };


module.exports = { getCartById, addCartById };