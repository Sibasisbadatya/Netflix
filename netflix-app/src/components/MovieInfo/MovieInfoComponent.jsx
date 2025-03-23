import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaPlay, FaHeart, FaPlus } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { useParams } from "react-router-dom";
import "./MovieInfo.css";
import { useDispatch, useSelector } from "react-redux";
import { requestData, setCurrentMovie, setError, setSuccess, setList, setFavourite, addWatchedMovies } from "../../redux/actions/movieActions";
const MovieInfoComponent = () => {
  const { imdbId } = useParams();
  const dispatch = useDispatch();
  const currMovie = useSelector((state) => state.currMovieInfo);
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        dispatch(requestData());
        dispatch(setCurrentMovie(imdbId))
        dispatch(setSuccess());
      } catch (err) {
        dispatch(setError(err.message));
      }
    };

    fetchMovie();
  }, [dispatch, imdbId, currMovie]);

  return (
    <div className="movie-details">
      <div className="movie-bg" style={{ backgroundImage: `url(${currMovie?.Poster})` }}></div>

      <Container className="content">
        <Row>
          <Col md={6} className="movie-info">
            <h1 className="movie-title">{currMovie?.Title}</h1>
            <p className="movie-meta">
              <span className="badge">⭐ {currMovie?.imdbRating}</span> | {currMovie?.Genre} | {currMovie?.Year}
            </p>
            <p className="movie-plot">{currMovie?.Plot}</p>
            <div className="movie-persons">
              <span><b>DIrected By :</b>{currMovie?.Director}</span>
            </div>
            <div className="movie-actions">
              <Button onClick={() => dispatch(addWatchedMovies(currMovie))} variant="light" className="action-btn" ><FaPlay /> Play</Button>
              <Button variant="light" onClick={() => dispatch(setFavourite(currMovie, currMovie?.isFav == true ? false : true))} className="action-btn"><FaHeart style={{ color: currMovie?.isFav == true ? '#FC427B' : '#ffffff' }} /> Like</Button>
              <Button variant="light" onClick={() => dispatch(setList(currMovie, currMovie?.isListAdded == true ? false : true))} className="action-btn">
                {
                  !currMovie?.isListAdded ?
                    <FaPlus /> :
                    <SiTicktick />
                }{currMovie?.isListAdded ? "Remove" : "Add"} </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
};

export default MovieInfoComponent;
