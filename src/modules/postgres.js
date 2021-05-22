const { Sequelize, DataTypes } = require('sequelize');
const UserModel = require('../model/UserModel');

const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/usersystem', {
    logging: e => console.log('SQL:', e)
});


module.exports = postgres


async function postgres () {
    try {
        let db = {}
        db.users = UserModel(Sequelize, sequelize)
        // let user = await db.users.create({name: "Muhammad", password: "test"})
        // console.log(users);

        // sequelize.sync({force: false})
        return db
    } catch (error) {
        console.error('Unable to connect to the database: error');
    }
}