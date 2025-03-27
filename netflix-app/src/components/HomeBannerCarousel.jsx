import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselImageDiv from "./CarouselComponents/CarouselImageDiv";
import './HomeBannerCarousel.css';
import { FaPlay, FaInfoCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addWatchedMovies } from "../redux/actions/movieActions";
import { Modal, Button } from "react-bootstrap";
import Logo from '../assets/Netflix.png'
import MovieModal from './MovieModal/MovieModal'
function HomeBannerCarousel() {
  const totalMovies = useSelector((state) => state.totalMovies);
  
  const slides = totalMovies.sort((a, b) => (b.Year - a.Year)).slice(0, 5);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handlePlayClick = (movie) => {
    setSelectedMovie(movie);
    setShow(true);
    dispatch(addWatchedMovies(movie));
  };
  return (
    <>
      <Carousel style={{ marginTop: '1rem' }} interval={3000}>
        {slides.map((slide, index) => (
          <Carousel.Item key={index} className="carousel-item">
            <div className="carousel">
              <CarouselImageDiv movie={slide} />
              <Carousel.Caption>
                <div className="caption">
                  <h1>{slide.Title}</h1>
                  <ul style={{ display: 'flex', gap: '50px', fontWeight: '500' }}>
                    <li>{slide.Year}</li>
                    <li>{slide.Rated}</li>
                    <li>{slide.imdbRating}</li>
                    <li>{slide.Type.charAt(0).toUpperCase() + slide.Type.slice(1)}</li>
                  </ul>
                  <p>{slide.Plot}</p>
                  <div className="btnDiv">
                    <button onClick={() => handlePlayClick(slide)}>
                      <FaPlay className="icons" />
                      <span>Play</span>
                    </button>
                    <Link to={`/info/${slide.imdbID}`} style={{ textDecoration: 'none' }}>
                      <button>
                        <FaInfoCircle className="icons" />
                        <span>Info</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <MovieModal show={show} handleClose={() => setShow(false)} movie={selectedMovie} />
    </>
  );
}

export default HomeBannerCarousel;
