import React, { useContext, useEffect, useState, Suspense } from "react";
import { useSelector } from "react-redux";
import "./Movies.css";
import themeContext from "../../contextAPI/contexts/themeContext";
import CommonPageEnding from "../CommonPageEnding/CommonPageEnding";
import { useMemo } from "react";
const MovieSpecificCarousel = React.lazy(() =>
    import("../../components/MovieSpecificCarousel/MovieSpecificCarousel")
);

const SkeletonLoader = () => (
    <div className="skeleton-movie-carousel">
        <div className="skeleton-heading"></div>
        <div className="skeleton-images">
            {Array(5).fill().map((_, index) => (
                <div key={index} className="skeleton-image"></div>
            ))}
        </div>
    </div>
);

const Movies = () => {
    const allMovies = useSelector((state) => state.totalMovies) || [];
    const genreCategories = useSelector((state) => state.genres) || [];
    const { isDark } = useContext(themeContext);

    const [visibleGenres, setVisibleGenres] = useState(5);

    const groupedMovies = useMemo(() =>
        genreCategories.map((genre) => ({
            genre,
            movieList: allMovies.filter((movie) =>
                movie.Genre.split(", ").map(g => g.trim()).includes(genre)
            ),
        })),
        [allMovies, genreCategories]);



    const loadMoreGenres = () => {
        setVisibleGenres((prev) => Math.min(prev + 5, genreCategories.length));
    };

    return (
        <>
            <div className="movie-page main-movie-page">
                <div className={`movie-heading ${!isDark && "light-movie-heading"}`}>
                    <h1>Movies</h1>
                    <div>
                        Movies move us like nothing else can, whether they’re scary, funny,
                        dramatic, romantic, or anywhere in-between. So many titles, so much
                        to experience.
                    </div>
                </div>

                <div className="movies-body main-movies-body">
                    <Suspense fallback={<SkeletonLoader />}>
                        {groupedMovies.slice(0, visibleGenres).map((moviesList, index) => (
                            <MovieSpecificCarousel key={index} movies={moviesList} />
                        ))}
                    </Suspense>
                </div>

                {visibleGenres < genreCategories.length && (
                    <div className="show-more-container">
                        <button className="show-more-btn" onClick={loadMoreGenres}>
                            Load More Genres
                        </button>
                    </div>
                )}
            </div>

            <CommonPageEnding />
        </>
    );
};

export default Movies;
