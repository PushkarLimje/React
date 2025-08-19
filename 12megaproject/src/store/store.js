import { configureStore } from "@reduxjs/toolkit"
import authSliceReducer from './authSlice'
const store = configureStore({
    reducer: {
        posts: authSliceReducer
    }
})

export default store ;
