// database.js
const { Sequelize } = require('sequelize');

// Replace 'database_name', 'username', and 'password' with your actual MySQL credentials
const sequelize = new Sequelize('school_db', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});


async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('🚀 Connection to MySQL has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();

module.exports = sequelize;