// In "@/Redux/Slices/Search.js"
import { createSlice } from "@reduxjs/toolkit";

const generalSlice = createSlice({
    name: "general",
    initialState: {
        downloadPopup: true
    },
    reducers: {
        SET_DOWNLOAD_POPUP_STATE(state, action) {
            state.downloadPopup = action.payload
        }
    },
});

export const { SET_DOWNLOAD_POPUP_STATE } = generalSlice.actions;
export default generalSlice.reducer;
