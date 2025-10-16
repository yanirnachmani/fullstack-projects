import React from 'react'
import { useCounter } from './useCounter'

export const Counter = () => {
    const [counter, reset, increment, decrement] = useCounter(3, { resetTo: 0, incBy: 5, decBy: 6 })
    return (
        <div>
            <button onClick={() => reset()}>reset</button>
            <button onClick={() => increment()}>increment</button>
            <button onClick={() => decrement()}>decrement</button>
            {counter}
        </div>
    )
}
