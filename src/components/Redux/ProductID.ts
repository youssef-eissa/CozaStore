import { createSlice } from "@reduxjs/toolkit";

const ProductIDSlice = createSlice({
    name: 'ProductID',
    initialState: {id:0},
    reducers: {
        setProductID: (state,action) => {
            state.id=action.payload
        }
    }
})

export const ProductIDReducer = ProductIDSlice.reducer
export const { setProductID } = ProductIDSlice.actions