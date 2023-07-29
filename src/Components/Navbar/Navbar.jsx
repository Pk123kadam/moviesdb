import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { filterget } from '../../Redux/movie'




function Navbar() {
    const dispatch = useDispatch()
    const [name, setname] = useState("")

    function handlesubmit(e) {
        e.preventDefault()
        dispatch(filterget(name))


    }




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
                            <input class="form-control me-2" type="search" value={name} placeholder="Search" aria-label="Search" onChange={(e) => {
                                setname(e.target.value)

                            }} />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
