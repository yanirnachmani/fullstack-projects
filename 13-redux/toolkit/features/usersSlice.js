import axios from 'axios'
import { usersState } from '../state.js'
import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'


export const fetchUsers = createAsyncThunk('users/fetchUsers', () => {
    return axios.get('http://localhost:3001')
    .then(res => res.data.map(user => user.email))
    .catch(err => err)
})


const usersSlice = createSlice({
    name: 'users',
    initialState: usersState, 
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.emails = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.emails = ''
            state.error = action.payload

        })
    }
})


export const usersReducer = usersSlice.reducer