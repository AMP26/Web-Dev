const db = require('../config/db');

class StudentService {
    async create(studentData) {
        const { firstName, lastName, email } = studentData;
        const query = `INSERT INTO students (first_name, last_name, email) VALUES(?, ?, ?)`;
        const [result] = await db.query(query, [firstName, lastName, email]);
        return result.insertId;
    }

    async getAll() {
        const query = `SELECT * FROM students`;
        const [rows] = await db.query(query);
        return rows;
    }

    async getById(id) {
        const query = `SELECT * FROM students WHERE id = ?`
        const [row] = await db.query(query, [id]);
        return row[0];
    }

    async update(id, studentData) {
        const { firstName, lastName, email } = studentData;
        const query = `UPDATE students SET first_name = ?, last_name = ?, email = ? WHERE id = ?`;
        const [result] = await db.query(query, [firstName, lastName, email, id]);
        return result.affectedRows > 0;
    }

    async delete(id) {
        const query = `DELETE FROM students WHERE id = ?`;
        const [result] = await db.query(query, [id]);
        return result.affectedRows > 0;
    }
}

module.exports = new StudentService();