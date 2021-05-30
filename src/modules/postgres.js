const { Sequelize, DataTypes } = require('sequelize');
const UserModel = require('../model/UserModel');
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/usersystem', {
logging: e => console.log("SQL: ", e)
});

module.exports = postgres


async function postgres() {
    try {
        let db = {};
        db.users = await UserModel(Sequelize, sequelize);
        // await sequelize.sync({force: false});
        return db
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
