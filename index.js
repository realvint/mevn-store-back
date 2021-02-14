const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const http = require('http')
const {routes} = require('./src/routes')

// initial DB
mongoose.connect(
    'mongodb://localhost:27017/mevnstore',
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)

// initial app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

routes.forEach((item) => {
    app.use(`/api/v1/${item}`, require(`./src/routes/${item}`))
})

// initial routes
const PORT = 3000
http.createServer({}, app).listen(PORT)
console.log(`Server running at ${PORT}`)