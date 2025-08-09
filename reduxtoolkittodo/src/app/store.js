import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice';
import reducer from '../features/todo/todoSlice';

//store creates
export const store = configureStore({
    reducer: todoReducer,
})