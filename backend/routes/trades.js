const express = require('express')

const router = express.Router()

const {
    createTrade,
    getTrades,
    getTrade,
    deleteTrade
} = require('../controllers/tradeController')

//GET all trades
router.get('/', getTrades)

//GET a trade
router.get('/:id', getTrade)

//POST a trade
router.post('/', createTrade)

router.delete('/:id', deleteTrade)


module.exports = router