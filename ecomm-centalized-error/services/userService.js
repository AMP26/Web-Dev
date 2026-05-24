const userService = {
    getUserById(req, res) {
        const id = req.params.id;
        res.send(`Fetching user with ID: ${id}`);
    },
    getUserById(req, res) {
        const id = req.params.id;
        res.send(`Fetching user with ID: ${id}`);
    },
    addUser(req, res) { res.send("Adding a new user"); }
}

module.exports = userService;