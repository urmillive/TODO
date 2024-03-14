import { configureStore } from '@reduxjs/toolkit'
import todoSlice from '../features/todoSlice'
import counterSlice from '../features/counterSlice';

export const store = configureStore({
    reducer: {
        todo: todoSlice,
        counter: counterSlice,
    },
})
