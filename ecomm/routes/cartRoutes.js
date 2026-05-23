const express = require('express');
const { useImperativeHandle } = require('react');
const router = express.Router();

router.get('/:userid', (req, res) => { res.send(`Fetching cart with user ID: ${req.params.userid}`); });

router.post('/:userid', (req, res) => { res.send(`Adding a new product to crt with user ID: ${useImperativeHandle}`); });

module.exports = router;