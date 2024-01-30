import { createSlice } from "@reduxjs/toolkit";

const SearchStateSlice = createSlice({
    name: 'SearchOpen',
    initialState: {open:false},
    reducers: {
        setSearchOpen: (state) => {
            state.open=!state.open
        }
    }
})
export const SearchStateReducer = SearchStateSlice.reducer
export const { setSearchOpen } = SearchStateSlice.actions