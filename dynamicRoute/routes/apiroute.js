const express = require('express');
const router = express.Router();


router.get('/:name', (req, res) => {
    const { name } = req.params;
    const { role } = req.query;

    if(role) {
       return res.status(200).send(`Name: ${name} - Role: ${role}`);
    }

    res.status(200).send(`Hello from User: ${name}`);
})

module.exports = router;