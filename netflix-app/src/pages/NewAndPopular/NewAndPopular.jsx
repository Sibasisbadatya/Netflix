import React, { use, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import MovieSpecificCarousel from '../../components/MovieSpecificCarousel/MovieSpecificCarousel';
import MovieSpecificCard from '../../components/MovieSpecificCard/MovieSpecificCard';
import '../SpecificMovie.css'
const NewAndPopular = () => {
    const allMovies = useSelector((state) => state.totalMovies) || [];
    const [latestMovies, setLatestMovies] = useState([]);
    useEffect(() => {
        const movies = allMovies.sort((a, b) => b.Year - a.Year).slice(0,50);
        setLatestMovies(movies);
    }, [allMovies])
    return (
        <>
            <div className='movie-page'>
                <div className='movie-heading'>
                    <h1>Movies</h1>
                    <h3>
                        Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.
                    </h3>
                </div>
                <div className='movies-body'>
                    {
                        latestMovies.map((moviesList, index) => {
                            return <MovieSpecificCard key={index} movie={moviesList} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default NewAndPopular