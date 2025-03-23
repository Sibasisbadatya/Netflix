import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar'
import MovieSlider from './components/MovieSlider/MovieSlider';
import { BrowserRouter, Routes, Route } from 'react-router'
import MovieInfo from './pages/MovieInfo'
import { useSelector } from 'react-redux'
import Footer from './pages/Footer/Footer'
function App() {

  const data = useSelector((state) => state);
  console.log("moviesData", data);

  return (
    <>
      <div style={{ width: '95vw', padding: '0px', boxSizing: 'border-box', minHeight: '100vh', backgroundColor: 'black', margin: 'auto' }}>
        <NavBar />
        <Routes>
          <Route path='/info/:imdbId' element={<MovieInfo />} />
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </div>

    </>
  )
}

export default App
