import React, { useContext, useState } from 'react';
import { Card, Modal, Button } from 'react-bootstrap';
import { FaPlay } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addWatchedMovies } from "../../redux/actions/movieActions";
import { Link } from 'react-router';
import './MovieCard.css';
import themeContext from '../../contextAPI/contexts/themeContext';
import Logo from "../../assets/Netflix.png"
import MovieModal from '../MovieModal/MovieModal';
const MovieCard = ({ movie }) => {
    const dispatch = useDispatch();
    const { isDark } = useContext(themeContext)
    const [show, setShow] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const handlePlayClick = (movie) => {
        setSelectedMovie(movie);
        setShow(true);
        dispatch(addWatchedMovies(movie));
    };
    return (
        <>
            <div className='card-div'>
                <Card
                    className='movie-card'
                    style={{ position: 'relative' }}
                >
                    <div className='card-body' style={{ backgroundImage: `url(${movie.Poster && movie.Poster !== "N/A" ? movie.Poster : Logo})` }} aria-label={movie.Title} >
                        <div className="movie-actions">
                            <FaPlay
                                onClick={() => {
                                    handlePlayClick(movie);
                                }}
                                className='play-icon'
                            />
                            <Link to={`/info/${movie?.imdbID}`} style={{ textDecoration: 'none', color: 'white' }}>
                                <FaInfoCircle className='info-icon' />
                            </Link>
                        </div>
                    </div>
                </Card>
            </div>
            <span className='title' style={{ color: isDark ? '#d1d8e0' : '#181818', fontSize: '15px' }}>🌟 {movie?.imdbRating} | {movie?.Title}</span>
            <MovieModal show={show} handleClose={() => setShow(false)} movie={selectedMovie} />
        </>
    );
};

export default React.memo(MovieCard);