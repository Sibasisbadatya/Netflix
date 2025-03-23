import Carousel from "react-bootstrap/Carousel";
import CarouselImageDiv from "./CarouselComponents/CarouselImageDiv";
import './HomeBannerCarousel.css'
import { FaPlay } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function HomeBannerCarousel() {
  const slides = useSelector((state) => state.totalMovies).slice(0, 5)
  const navigate = useNavigate();
  return (
    <Carousel style={{ position: 'relative', width: '100%', backgroundColor: 'red' }} >
      {slides.map((slide, index) => (
        <Carousel.Item key={index} className="carousel-item">
          <div className="carousel">
            <CarouselImageDiv image={slide.Poster} text={slide.Title} />
            <Carousel.Caption>
              <div className="caption">
                <h3>{slide.Title}</h3>
                <ul style={{ display: 'flex', justifyContent: 'flex-start', gap: '50px', fontWeight: '500' }}>
                  <li>{slide.Year}</li>
                  <li>{slide.Rated}</li>
                  <li>{slide.imdbRating}</li>
                  <li>{slide.Type.charAt(0).toUpperCase() + slide.Type.slice(1)}</li>
                </ul>
                <p>{slide.Plot}</p>
                <div className="btnDiv">
                  <button style={{ borderRadius: '5px', backgroundColor: 'white' }}><FaPlay style={{ fontSize: '30px' }} /><span>Play</span></button>
                  <Link to={`/info/${slide.imdbID}`} style={{ borderRadius: '5px', backgroundColor: '#636e72',textDecoration:'none  ' }}><button><FaInfoCircle style={{ fontSize: '30px' }} /><span>Info</span></button></Link>
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
