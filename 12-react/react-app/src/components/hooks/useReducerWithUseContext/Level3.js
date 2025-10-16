import React from 'react'
import { CountContext } from './Main'
import { DECREMENT, INCREMENT, RESET } from '../actionType'

export const Level3 = () => {
    const { count, dispatch } = React.useContext(CountContext)

    return (
        <div>
            {count}
            <button onClick={() => dispatch(INCREMENT)}>INCREMENT</button>
            <button onClick={() => dispatch(DECREMENT)}>DECREMENT</button>
            <button onClick={() => dispatch(RESET)}>RESET</button>
        </div>
    )
}
