const getProducts = (req, res) => { res.send("Fetching all products!"); };

const getProductID = (req, res) => { res.send(`Fetching product with ID: ${req.params.id}`)}; 

const addProduct = (req, res) => { res.send("Adding a new product"); };

module.exports = { getProducts, getProductID, addProduct }