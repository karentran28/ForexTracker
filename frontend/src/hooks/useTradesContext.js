import { TradesContext } from "../context/TradesContext";
import { useContext } from "react";

export const useTradesContext = () => {
    const context = useContext(TradesContext)

    if (!context) {
        throw Error('useTradesContext must be used inside an TradesContextProvider')
    }

    return context
}