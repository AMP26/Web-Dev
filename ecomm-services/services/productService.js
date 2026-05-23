const productService = {
    getProducts(req, res) {
        res.send("Fetching all products");
    },
    getProductById(req, res) {
        const { id } = req.params;
        res.send(`Fetching product with ID: ${id}`);
    },
    addProduct(req, res) {
        res.send("Adding a new product");
    }
}

module.exports = productService;