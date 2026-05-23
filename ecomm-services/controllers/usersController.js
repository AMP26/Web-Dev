const userService = require('../services/userService');

const getUsers = (req, res) => { userService.getUsers(req, res); };

const getUserById = (req, res) => { userService.getUserById(req, res); };

const addUser = (req, res) => { userService.addUser(req, res); };


module.exports = { getUsers, getUserById, addUser };