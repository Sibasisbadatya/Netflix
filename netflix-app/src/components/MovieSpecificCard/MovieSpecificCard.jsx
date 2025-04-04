import React, { useContext, useState } from 'react'
import { Card, Modal, Button } from 'react-bootstrap'
import './MovieSpecificCard.css'
import { FaPlay, FaHeart, FaPlus } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { useDispatch } from 'react-redux'
import { setList, setFavourite, addWatchedMovies } from "../../redux/actions/movieActions";
import { Link } from 'react-router';
import themeContext from '../../contextAPI/contexts/themeContext';
import Logo from "../../assets/Netflix.png"
import toast, { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import MovieModal from '../MovieModal/MovieModal'
const MovieSpecificCard = ({ movie }) => {
    const dispatch = useDispatch();
    const { isDark } = useContext(themeContext);
    const [show, setShow] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const handlePlayClick = (movie) => {
        setSelectedMovie(movie);
        setShow(true);
        dispatch(addWatchedMovies(movie));
    };
    return (
        <>
            <div className='main-card-div' style={{ display: 'flex', flexDirection: 'column' }}>
                <div className='card-div' style={{ marginBottom: '1rem', borderRadius: '10px' }}>
                    <Card
                        className='movie-card'
                        style={{
                            position: 'relative'
                        }}
                    >
                        <div className='card-body' style={{ backgroundImage: `url(${movie.Poster && movie.Poster !== "N/A" ? movie.Poster : Logo})` }} aria-label={movie.Title} >
                            <div className="movie-actions">
                                <FaPlay onClick={() => {
                                    handlePlayClick(movie)
                                }} />
                                <FaHeart onClick={() => {
                                    toast.success(movie?.isFav ? "Succesfully Removed from Favourites" : "Succesfully Added to Favourites")
                                    dispatch(setFavourite(movie, movie?.isFav == true ? false : true))
                                }} style={{ color: movie?.isFav == true ? '#FC427B' : '#ffffff' }} />
                                {
                                    !movie?.isListAdded ?
                                        <FaPlus onClick={() => {
                                            toast.success("successfully Added to Your List");
                                            dispatch(setList(movie, movie?.isListAdded == true ? false : true))
                                        }} /> :
                                        <SiTicktick onClick={() => {
                                            toast.success("successfully Removed from Your List");
                                            dispatch(setList(movie, movie?.isListAdded == true ? false : true))
                                        }} />
                                }
                                <Link to={`/info/${movie?.imdbID}`} style={{ textDecoration: 'none', color: 'white' }}>
                                    <FaInfoCircle className='info-icon' />
                                </Link>
                            </div>
                        </div>
                    </Card>
                </div>
                <span className='span-title' style={{ color: isDark ? 'aliceblue' : 'black' }}>{movie?.Title}</span>
            </div>
            <MovieModal show={show} handleClose={() => setShow(false)} movie={selectedMovie} />
        </>
    )
}

export default React.memo(MovieSpecificCard)