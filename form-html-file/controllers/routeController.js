const routeService = require('../services/routeService');

const formFn = (req, res) => { routeService.formFn(req, res); };

module.exports = { formFn };