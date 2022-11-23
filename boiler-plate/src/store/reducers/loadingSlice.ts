import { createSlice } from "@reduxjs/toolkit";
const initialState: boolean = false;

export const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state =action.payload;
            return state
        }
    }
})
export const { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;