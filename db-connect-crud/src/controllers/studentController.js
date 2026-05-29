const studentService = require('../services/studentService');

class studentController {
    async createStudent(req, res) {
            const { firstName, lastName, email } = req.body;
            if(!firstName || !lastName || !email) { 
                const error = new Error("All fields required!");
                error.statusCode = 400;
                throw error;
            }

            const insertId = await studentService.create({ firstName, lastName, email });
            res.status(201).json({ message: "Student created.", id: insertId });
    }

    async getAllStudents(req, res) {
        const students = await studentService.getAll();
        return res.status(200).json(students);
    }

    async getStudentById(req, res) {
        const id = req.params.id;
        const student = await studentService.getById(id);
        if(!student) {
            const error = new Error("Student not found.");
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json(student);
    }

    async updateStudent(req, res) {
        const {firstName, lastName, email } = req.body;
        const id = req.params.id;
        if(!firstName || !lastName || !email) { 
            const error = new Error("All fields required!");
            error.statusCode = 400;
            throw error;
        }

        const updated = await studentService.update(id, { firstName, lastName, email });
        res.status(200).json({ message: "Student updated successfully!" })
    }

    async deleteStudent(req, res) {
        const id = req.params.id;
        const deleted = await studentService.delete(id);
        if(!deleted) {
            const error = new Error("Student not found!");
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json({ message: "Student deleted successfully!" });
    }   
}

module.exports = new studentController();