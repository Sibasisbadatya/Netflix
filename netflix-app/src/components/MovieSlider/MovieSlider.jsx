import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import "./MovieSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "../MovieCard/MovieCard";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { WATCH_IT_AGAIN, TRENDING_NOW, FOR_YOU } from "../../services/SliderConstants"
import { useSelector } from "react-redux";
import settings from "../slickerSetting/setting";
import themeContext from "../../contextAPI/contexts/themeContext";
function MovieSlider({ data }) {
    const { isDark } = useContext(themeContext);
    const movies = useSelector((state) => {
        switch (data.title) {
            case WATCH_IT_AGAIN:
                return state.recentlyWatched
                    .map(movie => ({ ...movie, lastWatch: new Date(movie.lastWatch) }))
                    .sort((a, b) => b.lastWatch - a.lastWatch)
                    .slice(0, 3);

            case TRENDING_NOW:
                return state.totalMovies.sort((a, b) => Number(b.Year) - Number(a.Year));
            case FOR_YOU:
                return state.totalMovies.sort((a, b) => parseFloat(b.imdbRating) - parseFloat(a.imdbRating));
            default:
                return state.totalMovies;
        }
    });
    console.log("watched", movies);


    return (
        <div className="slider-container">
            <h1 className="title slider-title"><b style={{ color: isDark ? '#d1d8e0' : '#e50914' }} >{data.title}</b></h1>

            <Slider {...settings}>
                {
                    (movies) && movies.slice(0, 10).map((movie, index) => {
                        return (
                            <MovieCard key={index} movie={movie} />
                        )
                    })
                }
            </Slider>
        </div>
    );
}

export default MovieSlider;
