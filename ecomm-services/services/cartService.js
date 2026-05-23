const cartService = {
    getCartById(req, res) {
        const { id } = req.params;
        res.send(`Fetching cart with ID: ${id}`);
    },
    addCartById(req, res) {
        const { id } = req.params;
        res.send(`Adding cart with ID: ${id}`);
    }
}

module.exports = cartService;