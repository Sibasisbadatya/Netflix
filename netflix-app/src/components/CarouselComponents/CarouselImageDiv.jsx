import React from "react";
import { Image } from "react-bootstrap";
import './CarouselImage.css'
function CarouselImageDiv({ text,image }) {
  return (
    <div className="carousel-image-container">
      <img
        className="movie-img"
        src={image} 
        alt={text}
      />
    </div>
  );
}

export default CarouselImageDiv;
