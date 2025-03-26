import React, { use, useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import MovieSpecificCard from '../../components/MovieSpecificCard/MovieSpecificCard';
import '../SpecificMovie.css'
import './NewAndPopular.css'
import themeContext from '../../contextAPI/contexts/themeContext';
import CommonPageEnding from '../CommonPageEnding/CommonPageEnding';
const NewAndPopular = () => {
    const { isDark } = useContext(themeContext)
    const allMovies = useSelector((state) => state.totalMovies) || [];
    const [latestMovies, setLatestMovies] = useState([]);
    useEffect(() => {
        const movies = allMovies.sort((a, b) => b.Year - a.Year).slice(0, 50);
        setLatestMovies(movies);
    }, [allMovies])
    return (
        <>
            <div className='latest-page'>
                <div className={`movie-heading ${!isDark && "light-movie-heading"}`}>
                        <h1>New & Popular</h1>
                        <div>
                            The latest hits and trending titles everyone is talking about. Stay ahead with fresh releases and must-watch favorites, all in one place.
                        </div>
                    </div>
                    <div className='movies-body'>
                        {
                            latestMovies.map((moviesList, index) => {
                                return <MovieSpecificCard key={index} movie={moviesList} />
                            })
                        }
                    </div>
            </div>
            <CommonPageEnding/>
        </>
    )
}

export default NewAndPopular