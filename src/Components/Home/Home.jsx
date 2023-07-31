import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { movieget } from '../../Redux/movie'
import "./Home.css"
import { Link } from 'react-router-dom'
import Loader from '../loader/Loader'
import { useState } from 'react'

function Home() {
    let path = "https://image.tmdb.org/t/p/w500"
    const dispatch = useDispatch()
    const { movie, fil, load, error } = useSelector((state) => state.movie)
    const [page, setPage] = useState(1);


    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight
        ) {
            // User has scrolled to the bottom of the page
            if (!load) {
                setPage((prevPage) => prevPage + 1);
            }
        }
    };
    useEffect(() => {
        dispatch(movieget(page))


    }, [page])
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })



    return (

        <div className='container-fluid' id='home'>
            <div className='row row-cols-lg-4 row-cols-md-2 row-cols-1 gy-5'>
                {load ? <Loader></Loader> : fil.length > 0 ? fil.map((item, index) => {
                    return <>
                        <div className='col d-flex justify-content-center'>
                            <div className='mx-auto d-flex flex-column gap-2'>
                                <Link to={`/${item.id}`}> <div style={{ height: "390px", width: "280px" }}>
                                    <img src={`${path}${item.poster_path}`} className='w-100 h-100' alt='not available'></img>
                                </div></Link>
                                <h6>{item.title}</h6>
                                <h6>Rating: {item.vote_average}</h6>
                            </div>

                        </div></>
                }) : movie.map((item, index) => {
                    return <>
                        <div className='col d-flex justify-content-center'>
                            <div className='mx-auto d-flex flex-column gap-2'>
                                <Link to={`/${item.id}`}> <div style={{ height: "390px", width: "280px" }}>
                                    <img src={`${path}${item.poster_path}`} className='w-100 h-100'></img>
                                </div></Link>
                                <h6>{item.title}</h6>
                                <h6>Rating: {item.vote_average}</h6>
                            </div>

                        </div></>
                })}
            </div>

        </div>
    )
}

export default Home
