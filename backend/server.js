require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const tradeRoutes = require('./routes/trades')

const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
//routes fire only at this specific path
app.use('/api/trades', tradeRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log("connected to db, listening on port", process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

