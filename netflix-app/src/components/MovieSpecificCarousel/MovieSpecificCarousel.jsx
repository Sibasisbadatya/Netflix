import React, { useContext } from 'react'
import MovieSpecificCard from '../MovieSpecificCard/MovieSpecificCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from '../slickerSetting/setting';
import themeContext from '../../contextAPI/contexts/themeContext';
import './MovieSpecificCarousel.css'
const MovieSpecificCarousel = ({ movies }) => {
    const { isDark } = useContext(themeContext);
    return (
        <div className='movie-genre-carousel' style={{ width: "95%" }}>
            <div> <h2 className={`genre-title ${!isDark && "light-genre-title"}`}>{movies.genre}</h2></div>
            <Slider {...settings}>
                {movies.movieList.slice(0, 10).map((movie, index) => (
                    <MovieSpecificCard key={index} movie={movie} />
                ))}
            </Slider>
        </div>
    )
}

export default MovieSpecificCarousel