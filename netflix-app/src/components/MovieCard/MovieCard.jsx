import React, { useEffect } from 'react'
import { Card, CardHeader, CardBody, CardTitle, CardText, Button } from 'react-bootstrap'
import { FaPlay, FaHeart, FaPlus } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { useDispatch } from 'react-redux'
import { setList, setFavourite, addWatchedMovies } from "../../redux/actions/movieActions";
import { Link } from 'react-router';
import './MovieCard.css'
const MovieCard = ({ movie }) => {
    const dispatch = useDispatch();
    useEffect(() => {

    }, [dispatch])
    return (
        <div className='card-div'>
            <Card
                className='movie-card'
                style={{
                    position: 'relative'
                }}
            >
                <div className='card-body' style={{ backgroundImage: `url(${movie.Poster})` }}>
                    <div className="movie-actions">
                        <FaPlay onClick={() => dispatch(addWatchedMovies(movie))} />
                        <FaHeart onClick={() => dispatch(setFavourite(movie, movie?.isFav == true ? false : true))} style={{ color: movie?.isFav == true ? '#FC427B' : '#ffffff' }} />
                        {
                            !movie?.isListAdded ?
                                <FaPlus onClick={() => dispatch(setList(movie, movie?.isListAdded == true ? false : true))} /> :
                                <SiTicktick onClick={() => dispatch(setList(movie, movie?.isListAdded == true ? false : true))} />
                        }
                        <Link to={`/info/${movie?.imdbID}`} style={{ textDecoration: 'none', color: 'white' }}>
                            <FaInfoCircle className='info-icon' />
                        </Link>

                    </div>
                </div>
            </Card>
            <span>{movie?.Title}</span>
        </div>
    );
};

export default MovieCard;
