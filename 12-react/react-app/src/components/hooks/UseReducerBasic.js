import React, { useReducer } from 'react'
import { INCREMENT, DECREMENT, RESET } from './actionType'

export const UseReducerBasic = () => {

    const initialCount = 5

    const reducer = (count, action) => {
        switch (action) {
            case INCREMENT:
                return count + 1
            case DECREMENT:
                return count - 1
            case RESET:
                return initialCount
            default:
                return count
        }
    }

    const [count, dispatch] = useReducer(reducer, initialCount)

    return (
        <div>
            <div>
                <button onClick={() => dispatch(INCREMENT)}>Increment</button>
            </div>
            <div>
                <button onClick={() => dispatch(DECREMENT)}>Decrement</button>
            </div>
            <div>
                <button onClick={() => dispatch(RESET)}>Reset</button>
            </div>
            {count}
        </div>
    )
}
