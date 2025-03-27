import React, { use, useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import MovieSpecificCard from '../../components/MovieSpecificCard/MovieSpecificCard';
import '../SpecificMovie.css'
import './MyList.css'
import themeContext from '../../contextAPI/contexts/themeContext';
import CommonPageEnding from '../CommonPageEnding/CommonPageEnding';
const MyList = () => {
    const allMovies = useSelector((state) => state.totalMovies) || [];
    const [myList, setFavMovies] = useState([]);
    const { isDark } = useContext(themeContext)
    useEffect(() => {
        const movies = allMovies.filter((movie) => movie.isListAdded === true);
        setFavMovies(movies);
    }, [allMovies])


    return (
        <>
            <div className='list-page'>
                <div className={`movie-heading ${!isDark && "light-movie-heading"}`}>
                    <h1>My List</h1>
                    <div>
                        Your personal collection of must-watch movies and shows. Whether it's a timeless classic or a new discovery, keep all your favorites in one place and watch anytime.
                    </div>
                </div>
                <div className='movies-body'>
                    {myList.length > 0 ? (
                        myList.map((movie, index) => (
                            <MovieSpecificCard key={index} movie={movie} />
                        ))
                    ) : (
                        <h2 style={{ color: isDark ? 'white' : '#e50914' }}>No Listed Movies</h2>
                    )}
                </div>
            </div>
            <CommonPageEnding />

        </>
    )
}

export default MyList