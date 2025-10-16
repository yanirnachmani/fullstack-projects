import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

import { CHECK, CLICK, ERROR, IS_LOADING, SET_USERS } from './actionType'


const UseReducerPostingData = () => {
    const initialState = {
        isLoading: false,
        error: '',
        users: [],
        ids: [1, 2, 3, 4, 5, 6],
        checks: [
            { id: 1, checked: true },
            { id: 2, checked: true },
            { id: 3, checked: true },
            { id: 4, checked: true },
            { id: 5, checked: true },
            { id: 6, checked: true },
        ]
    }


    const reducer = (state, action) => {
        switch (action.type) {
            case CHECK:
                return {
                    ...state,
                    checks: [
                        ...state.checks.filter((obj) => obj.id !== action.value.id),
                        { id: action.value.id, checked: action.value.checked },
                    ].sort((a, b) => a.id - b.id),
                }
            case CLICK:
                return {
                    ...state,
                    ids: state.checks.filter((check) => check.checked).map((obj) => obj.id)
                }
            case SET_USERS:
                return {
                    ...state,
                    users: action.value.data
                }
            case IS_LOADING:
                return {
                    ...state, isLoading: action.value.isLoading
                }
            case ERROR:
                return {
                    ...state, error: action.value.error
                }
            default:
                break;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        async function postBulkUsers() {
            try {
                dispatch({
                    type: IS_LOADING,
                    value: {
                        isLoading: true
                    }
                })
                const response = await axios.post(
                    'http://localhost:3001/bulk-users',
                    state.ids
                )
                dispatch({
                    type: IS_LOADING,
                    value: {
                        isLoading: false
                    }
                })
                dispatch({
                    type: SET_USERS,
                    value: {
                        data: response.data,
                    }

                })
            } catch (error) {
                dispatch({
                    type: IS_LOADING,
                    value: {
                        isLoading: false
                    }
                })
                dispatch({
                    type: ERROR,
                    value: {
                        error: error.message
                    }
                })
            }
        }
        postBulkUsers()
    }, [state.ids])


    return (
        <div>
            <form>
                {state.checks.map((check) => (
                    <div key={check.id}>
                        <label>User {check.id}</label>
                        <input
                            type="checkbox"
                            checked={check.checked}
                            onChange={(event) => {
                                dispatch({
                                    type: CHECK,
                                    value: {
                                        id: check.id,
                                        checked: event.target.checked
                                    }
                                })
                            }}
                        />
                    </div>
                ))}




                <button
                    type="button"
                    onClick={() => dispatch({ type: CLICK })}
                >
                    Send bulk users
                </button>
            </form>
            {/* <div>{dataState.isLoading && 'Loading...'}</div>
            <div>{dataState.error}</div> */}
            <ul>
                {/* 
                {

                    dataState.users.map((user) =>
                        <li key={user.id} style={{ "list-style-type": "none" }}>{user.first_name} {user.last_name}</li>

                    )

                } */}
            </ul>
        </div>

    )

}

export default UseReducerPostingData

