import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { filterget } from '../../Redux/movie'




function Navbar() {
    const dispatch = useDispatch()
    const { load } = useSelector((state) => state.movie)
    const [name, setname] = useState("")
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

    function handlesubmit(e) {
        e.preventDefault()

        dispatch(filterget({ name, page }))


    }
    useEffect(() => {
        dispatch(filterget({ name, page }))
    }, [page])
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })




    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div class="container">
                    <Link to="/"><button className='btn text-light'>MoviesDb</button></Link>


                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-2">
                            <li class="nav-item">
                                <Link to="/popular"><button className='btn text-light'>Popular</button></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/toprated"><button className='btn text-light'>Top Rated</button></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/upcoming"><button className='btn text-light'>Upcoming</button></Link>
                            </li>


                        </ul>
                        <form class="d-flex" onSubmit={handlesubmit}>
                            <input class="form-control me-2" type="search" value={name} placeholder="Search Movies" aria-label="Search" onChange={(e) => {
                                setPage(1)
                                setname(e.target.value)

                            }} />
                            <button class="btn btn-outline-success" type="submit" id='submit'>Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
