const express = require('express')
const app = express()
const cors = require('cors')
const fs = require('fs')
const path = require('path');
const psql = require('./modules/postgres')()


app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(async (req, res, next) => {
    req.psql = await psql
    next()
})

app.use(cors())
const PORT = 7777;

app.listen(PORT, () => console.log(`SERVER READY ${PORT}`))



fs. readdir(path.join(__dirname, "routes"), (err, files) => {
    files.forEach(file => {
        console.log(file);
        const route = require(path.join(__dirname, "routes", file))
        if(route.path && route.router) app.use(route.path, route.router)
    })
})


// MVC = Model View Controller

// 200 success
// 300 redirect
// 400 client error
// 500 server error
