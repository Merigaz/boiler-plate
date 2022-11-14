import { v4 } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const initialState: any = []

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push({
                id: v4(),
                ...action.payload
            });
        },
        editTask: (state, action) => {
            const indexTask = state.findIndex((val: any) => val.id === action.payload.id)
            state[indexTask] = action.payload
        },
        deleteTask: (state, action) => {
            const taskFound = state.find((val:any) => val.id === action.payload)
            if (taskFound) {
                state.splice(state.indexOf(taskFound),1)
            }
        }
    }
})
export const { addTask, editTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;