import { createSlice } from "@reduxjs/toolkit";

const initialState: any = []

export const pokeSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        addPoke: (state, action) => {
            state.push({
                ...action.payload
            });
        },
        editPoke: (state, action) => {
            const indexTask = state.findIndex((val: any) => val.id === action.payload.id)
            state[indexTask] = action.payload
        },
        deletePoke: (state, action) => {
            const taskFound = state.find((val:any) => val.id === action.payload)
            if (taskFound) {
                state.splice(state.indexOf(taskFound),1)
            }
        }
    }
})
export const { addPoke, editPoke, deletePoke } = pokeSlice.actions;
export default pokeSlice.reducer;