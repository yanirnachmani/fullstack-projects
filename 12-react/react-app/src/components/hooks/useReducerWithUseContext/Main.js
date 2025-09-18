import React, { useReducer } from 'react'
import { Level1 } from './Level1'
import { Level2 } from './Level2'
import { Level3 } from './Level3'
import { DECREMENT, INCREMENT, RESET } from '../actionType'


export const CountContext = React.createContext()

export const Main = () => {



    const initialCount = 0

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
            <CountContext.Provider value={{ count, dispatch }}>
                <h1>Count - {count}</h1>
                <Level1 />
                <Level2 />
                <Level3 />
            </CountContext.Provider>
        </div>
    )
}
