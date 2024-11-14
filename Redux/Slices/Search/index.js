// In "@/Redux/Slices/Search.js"
import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        isActive: false,
    },
    reducers: {
        SET_SEARCHSCREEN_ACTIVE(state, action) {
            state.isActive = action.payload;
        },
    },
});

export const { SET_SEARCHSCREEN_ACTIVE } = searchSlice.actions;
export default searchSlice.reducer;
