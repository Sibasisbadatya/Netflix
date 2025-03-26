import React, { useContext } from 'react'
import { Card} from 'react-bootstrap'
import './MovieSpecificCard.css'
import { FaPlay, FaHeart, FaPlus } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { useDispatch } from 'react-redux'
import { setList, setFavourite, addWatchedMovies } from "../../redux/actions/movieActions";
import { Link } from 'react-router';
import themeContext from '../../contextAPI/contexts/themeContext';
import Logo from "../../assets/Netflix.png"
const MovieSpecificCard = ({ movie }) => {
    const dispatch = useDispatch();
    const { isDark } = useContext(themeContext);
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
                                <FaPlay onClick={() => dispatch(addWatchedMovies(movie))} />
                                <FaHeart onClick={() => {
                                    dispatch(setFavourite(movie, movie?.isFav == true ? false : true))
                                }} style={{ color: movie?.isFav == true ? '#FC427B' : '#ffffff' }} />
                                {
                                    !movie?.isListAdded ?
                                        <FaPlus onClick={() => {
                                            dispatch(setList(movie, movie?.isListAdded == true ? false : true))
                                        }} /> :
                                        <SiTicktick onClick={() => {
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
        </>
    )
}

export default React.memo(MovieSpecificCard)