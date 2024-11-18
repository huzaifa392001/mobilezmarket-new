// In "@/Redux/Slices/Search.js"
import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        isActive: false,
        query: '',
        requestedProduct: [],
        loading: false
    },
    reducers: {
        SET_SEARCHSCREEN_ACTIVE(state, action) {
            state.isActive = action.payload;
        },
        SET_SEARCH_QUERY(state, action) {
            state.query = action.payload
        },
        SET_REQUESTED_PRODUCT(state, action) {
            state.requestedProduct = action.payload
        },
        SET_LOADING(state, action) {
            state.loading = action.payload
        }
    },
});

export const { SET_SEARCHSCREEN_ACTIVE, SET_SEARCH_QUERY, SET_REQUESTED_PRODUCT, SET_LOADING } = searchSlice.actions;
export default searchSlice.reducer;
