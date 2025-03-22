import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaPlay, FaHeart, FaPlus } from "react-icons/fa";
import { useParams } from "react-router-dom";
import "./MovieInfo.css";
const movie = {
    Title: "The Shawshank Redemption",
    Year: "1994",
    Rated: "R",
    Released: "14 Oct 1994",
    Runtime: "142 min",
    Genre: "Drama",
    Director: "Frank Darabont",
    Writer: "Stephen King, Frank Darabont",
    Actors: "Tim Robbins, Morgan Freeman, Bob Gunton",
    Plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    Language: "English",
    Country: "United States",
    Awards: "Nominated for 7 Oscars. 21 wins & 43 nominations total",
    Poster: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    Ratings: [
        { Source: "Internet Movie Database", Value: "9.3/10" },
        { Source: "Rotten Tomatoes", Value: "91%" },
        { Source: "Metacritic", Value: "81/100" }
    ],
    Metascore: "81",
    imdbRating: "9.3",
    imdbVotes: "2,559,562",
    imdbID: "tt0111161",
    Type: "movie",
    DVD: "21 Dec 1999",
    BoxOffice: "$28,767,189",
    Production: "N/A",
    Website: "N/A",
    Response: "True"
}
const MovieInfoComponent = () => {


    return (
        <div className="movie-details">
      <div className="movie-bg" style={{ backgroundImage: `url(${movie.Poster})` }}></div>

      <Container className="content">
        <Row>
          <Col md={6} className="movie-info">
            <h1 className="movie-title">{movie.Title}</h1>
            <p className="movie-meta">
              <span className="badge">⭐ {movie.imdbRating}</span> | {movie.Genre} | {movie.Year}
            </p>
            <p className="movie-plot">{movie.Plot}</p>

            {/* Buttons */}
            <div className="movie-actions">
              <Button variant="light" className="action-btn"><FaPlay /> Play</Button>
              <Button variant="outline-light" className="action-btn"><FaHeart /> Like</Button>
              <Button variant="outline-light" className="action-btn"><FaPlus /> Add to List</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

    );
};

export default MovieInfoComponent;
