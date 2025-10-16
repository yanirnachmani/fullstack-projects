import { useState } from 'react'

export const useCounter = (initCounter, { incBy, decBy, resetTo }) => {
    const [counter, setCounter] = useState(initCounter)
    const reset = () => {
        setCounter(resetTo)
    }
    const increment = () => {
        setCounter(prevCounter => prevCounter + incBy)
    }
    const decrement = () => {
        setCounter(prevCounter => prevCounter - decBy)
    }
    return [counter, reset, increment, decrement]
}
