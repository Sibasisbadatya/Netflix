import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import MovieSpecificCarousel from '../../components/MovieSpecificCarousel/MovieSpecificCarousel';
const Movies = () => {

    const allMovies = useSelector((state) => state.totalMovies) || [];
    const genreCategories = useSelector((state) => state.genres);
    const [groupedMovies, setGroupedMovies] = useState([])
    useEffect(() => {
        const moviesByGenre = genreCategories.map((genre) => ({
            genre,
            movieList: allMovies.filter((movie) =>
                movie.Genre.split(", ").map(g => g.trim()).includes(genre)
            ),
        }));
        setGroupedMovies(moviesByGenre);
    }, [allMovies])


    console.log("Grouped Movies", groupedMovies);

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
                        groupedMovies.map((moviesList, index) => {
                            console.log("under map", moviesList);
                            return <MovieSpecificCarousel key={index} movies={moviesList} />
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default Movies