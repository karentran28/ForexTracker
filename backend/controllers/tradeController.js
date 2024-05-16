const Trade = require('../models/tradeModel')
const mongoose = require('mongoose')


//GET all trades
const getTrades = async (req, res) => {
    const trades = await Trade.find({}).sort({createdAt: -1})

    res.status(200).json(trades)
}

// GET a trade
const getTrade = async(req, res) => {
    const { id } = req.params

    const trade = await Trade.findById(id)

    if (!trade) {
        return res.status(404).json({error: 'no such trades'})
    }

    res.status(200).json(trade)
}

// CREATE a trade
const createTrade = async (req, res) => {
    const {currencypair, buyorsell, ordertype, startprice, endprice, profit} = req.body

    //add doc to db
    try {
        const trade = await Trade.create({currencypair, buyorsell, ordertype, startprice, endprice, profit})
        res.status(201).json(trade)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//DELETE a trade
const deleteTrade = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such trade'})
    }

    const trade = await Trade.findOneAndDelete({_id: id})

    if (!trade) {
        return res.status(404).json({error: 'no such trades'})
    }

    res.status(200).json(trade)
}


module.exports = {
    createTrade,
    getTrades,
    getTrade,
    deleteTrade
}