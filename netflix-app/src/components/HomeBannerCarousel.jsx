import Carousel from "react-bootstrap/Carousel";
import CarouselImageDiv from "./CarouselComponents/CarouselImageDiv";
import './HomeBannerCarousel.css'
import { FaPlay } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addWatchedMovies } from "../redux/actions/movieActions";
function HomeBannerCarousel() {
  const totalMovies = useSelector((state) => state.totalMovies);
  const slides = totalMovies.sort((a, b) => (b.Year - a.Year)).slice(0, 5);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Carousel style={{ marginTop: '1rem' }}>
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
                  <button onClick={() => dispatch(addWatchedMovies(slide))}><FaPlay className="icons" /><span>Play</span></button>
                  <Link to={`/info/${slide.imdbID}`} style={{ textDecoration: 'none' }}><button><FaInfoCircle className="icons" /><span>Info</span></button></Link>
                </div>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default HomeBannerCarousel;
