import React, { use, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import MovieSpecificCarousel from '../../components/MovieSpecificCarousel/MovieSpecificCarousel';
import MovieSpecificCard from '../../components/MovieSpecificCard/MovieSpecificCard';
const MyList = () => {
    const allMovies = useSelector((state) => state.totalMovies) || [];
    const [myList, setFavMovies] = useState([]);
    useEffect(() => {
        const movies = allMovies.filter((movie) => movie.isListAdded === true);

        console.log("fav Movies", movies);

        setFavMovies(movies);
    }, [allMovies])

    console.log("Fav List Movies", allMovies);

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
                        myList.map((moviesList, index) => {
                            console.log("each fav movie", moviesList);
                            return <MovieSpecificCard key={index} movie={moviesList} />
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default MyList