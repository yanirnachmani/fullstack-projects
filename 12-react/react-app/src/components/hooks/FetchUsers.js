import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const FetchUsers = () => {
    const [usersState, setUsersState] = useState({
        users: [],
        error: '',
        loading: false
    })

    useEffect(() => {
        async function fetchData() {
            try {
                setUsersState((prevState) => ({
                    ...prevState,
                    loading: true
                }))

                const res = await axios.get('http://localhost:3001')

                setUsersState({
                    users: res.data,
                    loading: false,
                    error: ''
                })
            } catch (error) {
                setUsersState({
                    users: [], loading: false, error: error.message
                })
            }
        }
        fetchData()
    }, [])
    return (
        <div>
            <div>{usersState.loading && 'Loading...'}</div>
            <div>{usersState.error}</div>
            <ul>
                {
                    usersState.users.map((user) =>
                        <li key={user.id}>{user.first_name} {user.last_name}</li>
                    )
                }
            </ul>
        </div>
    )
}
