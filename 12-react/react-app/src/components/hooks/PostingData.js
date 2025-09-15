
import React, { useState, useEffect } from 'react'

import axios from 'axios'


const PostingData = () => {


    const [ids, setIds] = useState([1, 2, 3, 4, 5, 6])

    const [checks, setChecks] = useState([

        { id: 1, checked: true },

        { id: 2, checked: true },

        { id: 3, checked: true },

        { id: 4, checked: true },

        { id: 5, checked: true },

        { id: 6, checked: true },

    ])

    const [dataState, setDataState] = useState({

        isLoading: false,

        error: '',

        users: [],

    })

    useEffect(() => {

        async function postBulkUsers() {

            try {

                setDataState(() => ({

                    error: '',

                    users: [],

                    isLoading: true,

                }))

                const response = await axios.post(

                    'http://localhost:3001/bulk-users',

                    ids

                )

                setDataState({

                    isLoading: false,

                    users: response.data,

                    error: '',

                })

            } catch (error) {

                setDataState({

                    isLoading: false,

                    error: error.message,

                    users: [],

                })

            }

        }

        postBulkUsers()

    }, [ids])

    return (
        <div>
            <form>

                {checks.map((check) => (
                    <div key={check.id}>
                        <label>User {check.id}</label>
                        <input

                            type="checkbox"

                            checked={check.checked}

                            onChange={(event) => {

                                setChecks(

                                    [

                                        ...checks.filter((obj) => obj.id !== check.id),

                                        { id: check.id, checked: event.target.checked },

                                    ].sort((a, b) => a.id - b.id)

                                )

                            }}

                        />
                    </div>

                ))}
                <button

                    type="button"

                    onClick={() =>

                        setIds(

                            checks.filter((check) => check.checked).map((check) => check.id)

                        )

                    }
                >

                    Send bulk users
                </button>
            </form>
            <div>{dataState.isLoading && 'Loading...'}</div>
            <div>{dataState.error}</div>
            <ul>

                {

                    dataState.users.map((user) =>
                        <li key={user.id} style={{ "list-style-type": "none" }}>{user.first_name} {user.last_name}</li>

                    )

                }
            </ul>
        </div>

    )

}

export default PostingData

