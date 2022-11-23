import tasksReducer from './reducers/taskSlice';
import  modalsReducer  from './reducers/modalSlice';
import  pokeReducer  from './reducers/pokeSlice';
import loadingReducer from './reducers/loadingSlice';
import { configureStore } from '@reduxjs/toolkit';
export const store = configureStore({
  reducer: { tasks: tasksReducer, modals: modalsReducer, pokemon: pokeReducer, loading: loadingReducer },
})
export default store;