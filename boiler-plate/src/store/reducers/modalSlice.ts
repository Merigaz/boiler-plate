import { createSlice } from "@reduxjs/toolkit";
const initialState: boolean = false;

export const modalSlice = createSlice({

    name: 'modals',
    initialState,
    reducers: {
        toggleModal: (state, action) => {
            state = !state;
            return state
        },
        resetModal: (state, action) => {
            state = false;
            return state
        }
    }
})
export const { toggleModal, resetModal} = modalSlice.actions;
export default modalSlice.reducer;