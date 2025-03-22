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
function App() {
  return (
    <>
      <div style={{ width: '95vw', padding: '0px', boxSizing: 'border-box', minHeight: '100vh',backgroundColor:'black' }}>
        <NavBar />
        <Routes>
          <Route path='/info/:imdbId' element={<MovieInfo />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>

    </>
  )
}

export default App
