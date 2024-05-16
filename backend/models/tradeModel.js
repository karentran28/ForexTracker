const mongoose = require('mongoose')

const Schema = mongoose.Schema

const tradeSchema = new Schema({
    currencypair: {
        type: String, 
        required: true
    },
    buyorsell: {
        type: String,
        required: true
    },
    ordertype: {
        type: String,
        required: true
    },
    startprice: {
        type: Number,
        required: true
    },
    endprice: {
        type: Number,
        required: true
    },
    profit: {
        type: Number,
        required: true
    }
}, { timestamps : true })

module.exports = mongoose.model('Trade', tradeSchema)

