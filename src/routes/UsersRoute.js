const router = require('express').Router()
const UsersGetController = require('../Controllers/UsersGetController')
const UsersSignUpPostController = require('../Controllers/UsersSignUpPostController')

router.get('/', UsersGetController);
router.post('/signup', UsersSignUpPostController)

module.exports = {
    router, path: '/users'
}