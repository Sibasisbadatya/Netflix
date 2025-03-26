import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MovieSpecificCard from '../../components/MovieSpecificCard/MovieSpecificCard';
import './Favourite.css';
import themeContext from '../../contextAPI/contexts/themeContext';
import CommonPageEnding from '../CommonPageEnding/CommonPageEnding';

const Favourite = () => {
    const { isDark } = useContext(themeContext);
    const allMovies = useSelector((state) => state.totalMovies) || [];
    const [favMovies, setFavMovies] = useState([]);

    useEffect(() => {
        setFavMovies(allMovies.filter(movie => movie.isFav));
    }, [allMovies]);

    return (
        <>
            <div className='fav-page'>
                <div className={`movie-heading ${!isDark && "light-movie-heading"}`}>
                    <h1>My Favourites</h1>
                    <div>
                        The movies and shows you love the most, all in one spot. From unforgettable stories to epic moments, these are the ones you keep coming back to.
                    </div>
                </div>
                <div className='movies-body'>
                    {favMovies.length > 0 ? (
                        favMovies.map((movie, index) => (
                            <MovieSpecificCard key={index} movie={movie} />
                        ))
                    ) : (
                        <h2>No Favourite Movies</h2>
                    )}
                </div>
            </div>
            <CommonPageEnding />
        </>
    );
};

export default Favourite;