

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from './Redux/store';
import Home from './Components/Home/Home';
import TopRated from './Components/Toprated/TopRated';
import Upcoming from './Components/Upcoming/Upcoming';
import Single from './Components/Single/Single';


function App() {


  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar></Navbar>

          <Routes>

            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/toprated' element={<TopRated></TopRated>}></Route>
            <Route path='/popular' element={<Home></Home>}></Route>
            <Route path='/upcoming' element={<Upcoming></Upcoming>}></Route>
            <Route path='/:id' element={<Single></Single>}></Route>
          </Routes></BrowserRouter>
      </Provider>

    </>
  )
}

export default App
