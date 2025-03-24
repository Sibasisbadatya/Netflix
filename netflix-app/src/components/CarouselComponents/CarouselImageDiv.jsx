import React from "react";
import { Image } from "react-bootstrap";
import './CarouselImage.css'
function CarouselImageDiv({ movie }) {
  return (
    <div className="carousel-image-container">
      <img
        className="movie-img"
        src={movie.Poster} 
        alt={movie.Title}
      />
    </div>
  );
}

export default CarouselImageDiv;
