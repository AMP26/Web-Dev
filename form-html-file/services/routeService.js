const path = require('path');

const routeService = {
    formFn(req, res) {
        res.sendFile(path.join(__dirname, '..', 'view', 'form.html'));
    }
}

module.exports = routeService;