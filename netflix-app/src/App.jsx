import { useContext, useState } from 'react'
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
import Movies from './pages/Movies/Movies'
import Favourite from './pages/Favourite/Favourite'
import NewAndPopular from './pages/NewAndPopular/NewAndPopular'
import themeContext from './contextAPI/contexts/themeContext'
import searchContext from './contextAPI/contexts/searchContext'
import SearchPage from './pages/SearchPage/SearchPage'
import MyList from './pages/MyList/MyList'
import NotFound from './pages/Page404/NotFound'
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from 'react-hot-toast';
function App() {
  const { isSearching, setIsSearching } = useContext(searchContext);
  const { isDark } = useContext(themeContext)
  return (
    <>
      <div className='app-div' style={{ width: '100vw', padding: '0px', boxSizing: 'border-box', backgroundColor: isDark ? '#181818' : '#d1d8e0', margin: 'auto', top: '-10px', transition: '0.3s ease-in-out' }}>
        <NavBar />
        <Toaster
          position="top-center"
        />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/info/:imdbId' element={<MovieInfo />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/favourites' element={<Favourite />} />
          <Route path='/latest' element={<NewAndPopular />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/list' element={<MyList />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        <Footer />
      </div>

    </>
  )
}

export default App
