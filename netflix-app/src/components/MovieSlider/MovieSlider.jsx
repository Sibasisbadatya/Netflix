import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./MovieSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "../MovieCard/MovieCard";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { WATCH_IT_AGAIN, TRENDING_NOW, FOR_YOU } from "../../services/SliderConstants"
import { useSelector } from "react-redux";


const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <FaChevronRight
            className={className}
            style={{
                ...style,
                display: "block",
                color: "red",
                fontSize: "30px"
            }}
            onClick={onClick}
        />
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <FaChevronLeft
            className={className}
            style={{
                ...style,
                display: "block",
                color: "red",
                fontSize: "30px"
            }}
            onClick={onClick}
        />
    );
};

function MovieSlider({ data }) {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const movies = useSelector((state) => {
        switch (data.title) {
            case WATCH_IT_AGAIN:
                return state.recentlyWatched;
            case TRENDING_NOW:
                return state.totalMovies.sort((a, b) => Number(b.Year) - Number(a.Year));
            case FOR_YOU:
                return state.totalMovies.sort((a, b) => parseFloat(b.imdbRating) - parseFloat(a.imdbRating));
            default:
                return state.totalMovies;
        }
    });
    console.log("watched",movies);
    
    // const watchedMovies = useSelector((state) => state.recentlyWatched)
    // const totalMovies = useSelector((state) => state.totalMovies);
    // useEffect(() => {
    //     const trendingNow = totalMovies.sort((a, b) => Number(b.Year) - Number(a.Year));
    //     const imdbWiseMovie = totalMovies.sort((a, b) => parseFloat(b.imdbRating) - parseFloat(a.imdbRating));
    //     switch (data.title) {
    //         case WATCH_IT_AGAIN:
    //             {
    //                 setMovies(watchedMovies)
    //                 break;
    //             }
    //         case TRENDING_NOW:
    //             {
    //                 setMovies(trendingNow);
    //                 break;
    //             }
    //         case FOR_YOU:
    //             {
    //                 setMovies(imdbWiseMovie)
    //                 break;
    //             }
    //         default: {
    //             setMovies(totalMovies)
    //             break;
    //         }
    //     }
    // }, [data.title]);
    // console.log("movies list in slider", movies);

    // console.log("recently watched", watchedMovies);

    return (
        <div className="slider-container">
            <h1 className="title"><b>{data.title}</b></h1>

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
