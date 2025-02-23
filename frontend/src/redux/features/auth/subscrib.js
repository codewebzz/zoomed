import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    subscribInfo: {},
}
const subscribSlice = createSlice({
    name: "subscrib",
    initialState,
    reducers: {
        setSubscribInfo: (state, action) => {
            state.subscribInfo = action.payload;
        },
    }
});

export const { setSubscribInfo } = subscribSlice.actions;

export default subscribSlice.reducer;