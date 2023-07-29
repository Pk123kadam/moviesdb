import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { castget, singleget } from '../../Redux/movie'
import { useEffect } from 'react'
import Loader from '../loader/Loader'
import "./Single.css"

function Single() {
    const { id } = useParams()
    console.log(id)
    let path = "https://image.tmdb.org/t/p/w500"
    const dispatch = useDispatch()
    const { single, cast, genres, load, error } = useSelector((state) => state.movie)
    console.log(single)
    useEffect(() => {
        dispatch(singleget(id))


    }, [])
    useEffect(() => {
        dispatch(castget(id))

    }, [])

    let fil = cast.filter((e, i) => i <= 5)


    return (
        <>
            {load ? <Loader></Loader> : <div className='container-fluid' id='home'>

                <div style={{

                    backgroundImage: `url(${path}${single.poster_path})`, height: "500px", backgroundSize: 'cover', backgroundPosition: "center", position: "relative",
                    backgroundRepeat: 'no-repeat'
                }} id='single_movie'>
                    <div className='single'></div>
                    <div style={{ position: "absolute", width: "100%", height: "100%" }} className='p-3'>

                        <div className='box1 d-flex flex-wrap gap-3'>
                            <div><img src={`${path}${single.backdrop_path}`} style={{ height: "300px", width: "300px" }}></img></div>
                            <div className='d-flex flex-column justify-content-center'>
                                <h2>{single.original_title}</h2>
                                <h5 className='text-primary'>Rating: {single.vote_average}</h5>
                                <p> <span className='bg-dark '>{single.runtime} min</span>  {genres.map((e) => {
                                    return <>
                                        {e.name}{' '}
                                    </>
                                })} </p>
                                <h5>Release Date: {single.release_date}</h5>
                            </div>
                        </div>
                        <div className='box2'>
                            <h3>overview</h3>
                            <h6>{single.overview}</h6>



                        </div>
                    </div>
                </div>
                <h2 className='mt-3'>Cast</h2>
                <div className='row row-cols-lg-6 row-cols-md-3 row-cols-1'>
                    {fil.map((e) => {
                        return <>
                            <div className='col'>
                                <img src={`${path}${e.profile_path}`} className='w-100' style={{ height: "320px" }}></img>
                                <p>{e.original_name}</p>
                                <p>Character: {e.character}</p>

                            </div></>
                    })}
                </div>


            </div>}
        </>
    )
}

export default Single
