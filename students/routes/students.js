const express = require('express');
const router = express.Router();

const students = [
{ id: 1, name: "Alice" },
{ id: 2, name: "Bob" },
{ id: 3, name: "Charlie" }
];

router.get('/', (req, res) => {
    const studentNames = students.map(student => student.name).join(', ');
    res.status(200).send(studentNames);
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const student = students.find(s => s.id === parseInt(id));

    if(!student) { return res.status(404).send(`Student with ID: ${id} not found!`); }

    res.json(student);
})


module.exports = router;