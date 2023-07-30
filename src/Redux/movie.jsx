import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"








const initialState = {
    movie: [],
    toprated: [],
    upcoming: [],
    single: {},
    cast: [],
    fil: [],
    genres: [],

    load: false,
    error: null





}

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {


        builder
            .addCase(movieget.fulfilled, (state, action) => {
                state.movie = action.payload
                state.load = false


            })
            .addCase(movieget.pending, (state, action) => {

                state.load = true


            }).addCase(movieget.rejected, (state, action) => {

                state.error = true


            }).addCase(topratedget.fulfilled, (state, action) => {
                state.toprated = action.payload
                state.load = false


            })
            .addCase(topratedget.pending, (state, action) => {

                state.load = true


            }).addCase(topratedget.rejected, (state, action) => {

                state.error = true


            }).addCase(upcomingget.fulfilled, (state, action) => {
                state.upcoming = action.payload
                state.load = false


            })
            .addCase(upcomingget.pending, (state, action) => {

                state.load = true


            }).addCase(upcomingget.rejected, (state, action) => {

                state.error = true


            }).addCase(singleget.fulfilled, (state, action) => {
                state.single = action.payload
                state.genres = action.payload.genres
                state.load = false


            })
            .addCase(singleget.pending, (state, action) => {

                state.load = true


            }).addCase(singleget.rejected, (state, action) => {

                state.error = true


            })
            .addCase(castget.fulfilled, (state, action) => {
                state.cast = action.payload
                state.load = false


            })
            .addCase(castget.pending, (state, action) => {

                state.load = true


            }).addCase(castget.rejected, (state, action) => {

                state.error = true


            }).addCase(filterget.fulfilled, (state, action) => {
                state.fil = action.payload


                state.load = false


            })
            .addCase(filterget.pending, (state, action) => {

                state.load = true


            }).addCase(filterget.rejected, (state, action) => {

                state.error = true


            })










    },
}
)



export const movieget = createAsyncThunk(
    'movies/get',

    async (thunkAPI) => {

        const data = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${thunkAPI}`)
        console.log(data)

        return data.data.results
        // return data.data

    }
)
export const singleget = createAsyncThunk(
    'single/get',

    async (thunkAPI) => {

        const data = await axios.get(`https://api.themoviedb.org/3/movie/${thunkAPI}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`)
        console.log(data.data)

        return data.data
        // return data.data

    }
)
export const topratedget = createAsyncThunk(
    'toprated/get',

    async (thunkAPI) => {

        const data = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${thunkAPI}`)
        console.log(data)

        return data.data.results
        // return data.data

    }
)

export const upcomingget = createAsyncThunk(
    'upcoming/get',

    async (thunkAPI) => {

        const data = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${thunkAPI}`)
        console.log(data)

        return data.data.results
        // return data.data

    }
)


export const castget = createAsyncThunk(
    'cast/get',

    async (thunkAPI) => {

        const data = await axios.get(`https://api.themoviedb.org/3/movie/${thunkAPI}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`)
        console.log(data)

        return data.data.cast
        // return data.data

    }
)
export const filterget = createAsyncThunk(
    'filter/get',

    async (thunkAPI) => {
        console.log(thunkAPI)


        const data = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${thunkAPI.name}&page=${thunkAPI.page}`)
        console.log(data)

        return data.data.results
        // return data.data

    }
)










// Action creators are generated for each case reducer function
export const { } = movieSlice.actions

export default movieSlice.reducer