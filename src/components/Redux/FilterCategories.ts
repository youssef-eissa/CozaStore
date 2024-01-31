import { createSlice } from "@reduxjs/toolkit";

const FilterCategoriesSlice = createSlice({
    name: 'FilterCategories',
    initialState: {FilterCategories:'All categories'},
    reducers: {
        setFilterCategories: (state,action) => {
            state.FilterCategories=action.payload
        }
    }
})
export const {setFilterCategories} = FilterCategoriesSlice.actions
export const FilterCategoriesReducer = FilterCategoriesSlice.reducer
