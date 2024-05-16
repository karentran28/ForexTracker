import { useTradesContext } from "../hooks/useTradesContext"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const TradeDetails = ({ trade }) => {

    const { dispatch } = useTradesContext()
    
    const handleClick = async () => {
        const response = await fetch('/api/trades/' + trade._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_TRADE', payload: json})
        }
    }

    return (
        <div className="trade-details">
            <h4>{trade.currencypair}</h4>
            <p><strong>Buy or Sell: </strong>{trade.buyorsell}</p>
            <p><strong>Order Type: </strong>{trade.ordertype}</p>
            <p><strong>Start Price: </strong>{trade.startprice}</p>
            <p><strong>End Pricce: </strong>{trade.endprice}</p>
            <p><strong>Profit: </strong>{trade.profit}</p>
            <p>{formatDistanceToNow(new Date(trade.createdAt), { addSuffix: true })}</p>
            <span onClick={handleClick} className="material-symbols-outlined">delete</span>
        </div>
    )
}

export default TradeDetails