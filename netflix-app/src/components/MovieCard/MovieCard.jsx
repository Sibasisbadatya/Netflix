import React from 'react';
import { Card } from 'react-bootstrap';
import { FaPlay } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addWatchedMovies } from "../../redux/actions/movieActions";
import { Link } from 'react-router';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
    const dispatch = useDispatch();

    return (
        <div className='card-div'>
            <Card
                className='movie-card'
                style={{ position: 'relative' }}
            >
                <div className='card-body' style={{ backgroundImage: `url(${movie.Poster})` }}>
                    <div className="movie-actions">
                        <FaPlay
                            onClick={() => dispatch(addWatchedMovies(movie))}
                            className='play-icon'
                        />
                        <Link to={`/info/${movie?.imdbID}`} style={{ textDecoration: 'none', color: 'white' }}>
                            <FaInfoCircle className='info-icon' />
                        </Link>
                    </div>
                </div>
            </Card>
            <span className='title'>{movie?.Title}</span>
        </div>
    );
};

export default MovieCard;