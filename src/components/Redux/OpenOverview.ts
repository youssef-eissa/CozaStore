import { createSlice } from "@reduxjs/toolkit";

const OpenOverviewSlice = createSlice({
    name: 'OpenOverview',
    initialState: {openOverview:false},
    reducers: {
        setOpenOverview: (state,action) => {
            state.openOverview=action.payload
        }
    }
})

export const OpenOverviewReducer = OpenOverviewSlice.reducer
export const { setOpenOverview } = OpenOverviewSlice.actions