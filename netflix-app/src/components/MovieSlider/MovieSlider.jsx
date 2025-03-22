import React from "react";
import Slider from "react-slick";
import "./MovieSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "../MovieCard/MovieCard";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const movieData = {
    Title: "The Shawshank Redemption",
    Year: "1994",
    Rated: "R",
    Released: "14 Oct 1994",
    Runtime: "142 min",
    Genre: "Drama",
    Director: "Frank Darabont",
    Writer: "Stephen King, Frank Darabont",
    Actors: "Tim Robbins, Morgan Freeman, Bob Gunton",
    Plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    Language: "English",
    Country: "United States",
    Awards: "Nominated for 7 Oscars. 21 wins & 43 nominations total",
    Poster: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    Ratings: [
        { Source: "Internet Movie Database", Value: "9.3/10" },
        { Source: "Rotten Tomatoes", Value: "91%" },
        { Source: "Metacritic", Value: "81/100" }
    ],
    Metascore: "81",
    imdbRating: "9.3",
    imdbVotes: "2,559,562",
    imdbID: "tt0111161",
    Type: "movie",
    DVD: "21 Dec 1999",
    BoxOffice: "$28,767,189",
    Production: "N/A",
    Website: "N/A",
    Response: "True"
}

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <FaChevronRight
            className={className}
            style={{
                ...style,
                display: "block",
                color: "red", // Change to any color you want
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
                color: "red", // Change to any color you want
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
    return (
        <div className="slider-container">
            <h1 className="title"><b>{data.title}</b></h1>

            <Slider {...settings}>
                <MovieCard movie={movieData} />
                <MovieCard movie={movieData} />
                <MovieCard movie={movieData} />
                <MovieCard movie={movieData} />
                <MovieCard movie={movieData} />
                <MovieCard movie={movieData} />
                <MovieCard movie={movieData} />
                <MovieCard movie={movieData} />
                <MovieCard movie={movieData} />
                <MovieCard movie={movieData} />
                <MovieCard movie={movieData} />
                <MovieCard movie={movieData} />
                <MovieCard movie={movieData} />
            </Slider>
        </div>
    );
}

export default MovieSlider;
