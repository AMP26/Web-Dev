const getUsers = (req, res) => { res.send("Fetching all users"); };

const getUserById = (req, res) => {
    const id = req.params.id;
    res.send(`Fetching user with ID: ${id}`);
};

const addUser = (req, res) => { res.send("Adding a new user"); };


module.exports = { getUsers, getUserById, addUser };