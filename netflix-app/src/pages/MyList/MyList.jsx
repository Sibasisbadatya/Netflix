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
    const {isDark} = useContext(themeContext)
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
                    {
                        myList.map((moviesList, index) => {
                            return <MovieSpecificCard key={index} movie={moviesList} />
                        })
                    }
                </div>
            </div>
            <CommonPageEnding/>

        </>
    )
}

export default MyList