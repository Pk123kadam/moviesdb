import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { upcomingget } from '../../Redux/movie'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../loader/Loader'
import { useState } from 'react'
function Upcoming() {
    const dispatch = useDispatch()
    let path = "https://image.tmdb.org/t/p/w500"
    const { upcoming, fil, load, error } = useSelector((state) => state.movie)
    const [page, setPage] = useState(1);
    const handleScroll = () => {
        const scrollY = window.scrollY;
        const totalHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;

        if (scrollY === 0 && page > 1 && !load) {
            // User has scrolled to the top of the page and there's a previous page
            setPage((prevPage) => prevPage - 1);
        } else if (scrollY + windowHeight >= totalHeight && !load) {
            // User has scrolled to the bottom of the page
            setPage((prevPage) => prevPage + 1);
        }
    };

    useEffect(() => {
        dispatch(upcomingget(page))

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
                        <div className='col d-flex justify-content-center' key={index}>
                            <div className='mx-auto d-flex flex-column gap-2'>
                                <div style={{ height: "330px", width: "280px" }}>
                                    <Link to={`/${item.id}`}> <div style={{ height: "330px", width: "280px" }}>
                                        <img src={`${path}${item.poster_path}`} className='w-100 h-100'></img>
                                    </div></Link>
                                </div>
                                <h6>{item.title}</h6>
                                <h6>Rating: {item.vote_average}</h6>
                            </div>

                        </div></>
                }) : upcoming.map((item, index) => {
                    return <>
                        <div className='col d-flex justify-content-center' key={index}>
                            <div className='mx-auto d-flex flex-column gap-2'>
                                <div style={{ height: "330px", width: "280px" }}>
                                    <Link to={`/${item.id}`}> <div style={{ height: "330px", width: "280px" }}>
                                        <img src={`${path}${item.poster_path}`} className='w-100 h-100'></img>
                                    </div></Link>
                                </div>
                                <h6>{item.title}</h6>
                                <h6>Rating: {item.vote_average}</h6>
                            </div>

                        </div></>
                })}
            </div>

        </div>

    )
}

export default Upcoming
