import tasksReducer from './reducers/taskSlice';
import  modalsReducer  from './reducers/modalSlice';
import  pokeReducer  from './reducers/pokeSlice';
import { configureStore } from '@reduxjs/toolkit';
export const store = configureStore({
  reducer: { tasks: tasksReducer, modals: modalsReducer, pokemon: pokeReducer },
})
export default store;