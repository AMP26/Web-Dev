
const sequelize = require('./database');
const User = require('./User');

async function main() {
  try {
    await sequelize.sync({ force: true });
    console.log('All models were synchronized successfully.');

    const newUser = await User.create({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
    });

    console.log('New user created successfully:', newUser.toJSON());

  } 
  catch (error) { console.error('Error syncing or inserting data:', error); } 
  finally { await sequelize.close(); }
}

main();