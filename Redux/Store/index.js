// In "@/Redux/Store.js"
import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "@/Redux/Slices/Search";

const store = configureStore({
    reducer: {
        search: searchReducer,
    },
});

export default store;
