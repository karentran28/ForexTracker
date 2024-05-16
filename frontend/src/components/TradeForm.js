
import { useState } from 'react'
import { useTradesContext } from "../hooks/useTradesContext"



const TradeForm = () => {
    const [currencypair, setCurrencypair] = useState('')
    const [buyorsell, setBuyorsell] = useState('')
    const [ordertype, setOrdertype] = useState('')
    const [startprice, setStartprice] = useState('')
    const [endprice, setEndprice] = useState('')
    const [profit, setProfit] = useState('')
    const [error, setError] = useState(null)
    const {dispatch} = useTradesContext()
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const trade = {currencypair, buyorsell, ordertype, startprice, endprice, profit}

        const response = await fetch('/api/trades', {
            method: 'POST',
            body: JSON.stringify(trade),
            headers: {
                "Content-type": 'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }

        if (response.ok) {
            setCurrencypair('')
            setBuyorsell('')
            setOrdertype('')
            setEndprice('')
            setStartprice('')
            setProfit('')
            setError(null)
            setEmptyFields([])
            console.log("new trade added")
            dispatch({type: 'CREATE_TRADE', payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Trade</h3>
            <label>Currency Pair:</label>
            <input
                type="text"
                onChange={(e) => setCurrencypair(e.target.value)}
                value={currencypair}
                className={emptyFields.includes('currencypair') ? 'error' : ''}
            />
            <label>Buy or Sell</label>
            <input
                type="text"
                onChange={(e) => setBuyorsell(e.target.value)}
                value={buyorsell}
                className={emptyFields.includes('buyorsell') ? 'error' : ''}
            />
            <label>Order Type:</label>
            <input
                type="text"
                onChange={(e) => setOrdertype(e.target.value)}
                value={ordertype}
                className={emptyFields.includes('ordertype') ? 'error' : ''}
            />
            <label>Start Price:</label>
            <input
                type="number"
                onChange={(e) => setStartprice(e.target.value)}
                value={startprice}
                className={emptyFields.includes('startprice') ? 'error' : ''}
            />
            <label>End Price:</label>
            <input
                type="number"
                onChange={(e) => setEndprice(e.target.value)}
                value={endprice}
                className={emptyFields.includes('endprice') ? 'error' : ''}
            />
            <label>Profit:</label>
            <input
                type="number"
                onChange={(e) => setProfit(e.target.value)}
                value={profit}
                className={emptyFields.includes('profit') ? 'error' : ''}
            />
            <button>Add Trade</button>
        </form>

    )
}

export default TradeForm