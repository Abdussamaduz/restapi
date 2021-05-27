const router = require('express').Router()
const UsersGetController = require('../controllers/UsersGetController')
const UsersSignUpPostController = require('../controllers/UsersSignUpPostController')



router.get('/', UsersGetController);
router.get('/signup', UsersSignUpPostController)

module.exports = {
    router: router,
    path: '/users'
}