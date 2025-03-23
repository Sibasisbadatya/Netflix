import React from 'react'
import Carousel from "react-bootstrap/Carousel";
// import CarouselImageDiv from "./CarouselComponents/CarouselImageDiv";
// import './HomeBannerCarousel.css'
import { FaPlay } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import MovieSpecificCard from '../MovieSpecificCard/MovieSpecificCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
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
const MovieSpecificCarousel = ({ movies }) => {
    console.log("MovieSpecificCarousel".movies);
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


        <div>
            <h2 >{movies.genre}</h2>
            <Slider {...settings}>
                {
                    (movies) && movies.movieList.slice(0, 10).map((movie, index) => {
                        return (
                            <MovieSpecificCard key={index} movie={movie} />
                        )
                    })
                }

            </Slider>
        </div>
    )
}

export default MovieSpecificCarousel