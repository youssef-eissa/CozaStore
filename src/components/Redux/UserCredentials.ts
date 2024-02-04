import { createSlice } from "@reduxjs/toolkit";

const UserCredentialsSlice = createSlice({
    name: 'UserCredentials',
    initialState: {username:'', password:''},
    reducers: {
        setUsername(state, action) {
            state.username = action.payload
        },
        setPassword(state, action) {
            state.password = action.payload
        }
    }
})

export const UserInfoReducer = UserCredentialsSlice.reducer
export const { setUsername, setPassword } = UserCredentialsSlice.actions