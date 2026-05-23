const express = require('express');
const router = express.Router();

const courses = [
{ id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },
{ id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }
];

router.get('/', (req, res) => {
    const courseNames = courses.map(c => c.name).join(', ');
    res.status(200).send(courseNames);
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find(c => c.id === parseInt(id));

    if(!course) { return res.status(404).send(`Course with ID: ${id} not found!`); }

    res.json(course);
});


module.exports = router;