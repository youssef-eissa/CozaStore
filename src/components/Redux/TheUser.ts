import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types/appTypes";
const theUser = createSlice({
    name: 'theuser',
    initialState: { user: {} as User , token: '' as string},
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        },
        setToken(state, action) {
            state.token = action.payload
        },
        logout(state) {
            state.user = {}
            state.token = ''
        }
    }
})

export const UserReducer = theUser.reducer
export const { setUser, setToken,logout } = theUser.actions