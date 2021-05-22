const router = require('express').Router()
const HomeGetController = require('../Controllers/HomeGetController')

router.get('/', HomeGetController)

module.exports = {
    router, path: '/'
}