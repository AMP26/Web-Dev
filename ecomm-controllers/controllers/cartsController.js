const getCartById = (req, res) => {
    const id = req.params.id;
    res.send(`Fetching cart with ID: ${id}`);
};

const addCartById = (req, res) => {
    const id = req.params.id;
    res.send(`Adding cart with ID: ${id}`);
};

module.exports = { getCartById, addCartById };