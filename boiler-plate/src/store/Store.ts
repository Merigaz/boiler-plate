import tasksReducer from './reducers/taskSlice'
import  modalsReducer  from './reducers/modalSlice';
import { configureStore } from '@reduxjs/toolkit'
export const store = configureStore({
  reducer: { tasks: tasksReducer, modals: modalsReducer },
})
export default store;