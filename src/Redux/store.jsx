import { configureStore } from '@reduxjs/toolkit'
import movieSlice from "./movie"


export const store = configureStore({
    reducer: {
        movie: movieSlice,


    },
})

