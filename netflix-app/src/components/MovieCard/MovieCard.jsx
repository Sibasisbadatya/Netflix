import React from "react";
import { Card } from "react-bootstrap";
import { IoMdAddCircle } from "react-icons/io";
import { MdDownloadDone } from "react-icons/md";
import { FaInfoCircle,FaHeart } from "react-icons/fa";
import './MovieCard.css'
const MovieCard = ({ movie }) => {
    return (
        <Card className="movie-card" style={{ width: '400px', height: '350px', position: 'relative',padding:'10px' }}>
            <Card.Img className="movie-image" variant="top" src={movie.Poster} style={{ height: '85%', width: '100%' }} />
            <Card.Body>
                <div className="card-icons">
                    <FaHeart className="icon like-icon" />
                    <IoMdAddCircle className="icon add-icon" />
                    <FaInfoCircle className="icon info-icon" />
                </div>
            </Card.Body>
        </Card>
    );
};

export default MovieCard;
