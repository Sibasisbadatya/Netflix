import Carousel from "react-bootstrap/Carousel";
import CarouselImageDiv from "./CarouselComponents/CarouselImageDiv";
import './HomeBannerCarousel.css'
import { FaPlay } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router";
const slides =
  [
    {
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
    },
    {
      Title: "The Godfather",
      Year: "1972",
      Rated: "R",
      Released: "24 Mar 1972",
      Runtime: "175 min",
      Genre: "Crime, Drama",
      Director: "Francis Ford Coppola",
      Writer: "Mario Puzo, Francis Ford Coppola",
      Actors: "Marlon Brando, Al Pacino, James Caan",
      Plot: "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
      Language: "English, Italian, Latin",
      Country: "United States",
      Awards: "Won 3 Oscars. 31 wins & 30 nominations total",
      Poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      Ratings: [
        { Source: "Internet Movie Database", Value: "9.2/10" },
        { Source: "Rotten Tomatoes", Value: "97%" },
        { Source: "Metacritic", Value: "100/100" }
      ],
      Metascore: "100",
      imdbRating: "9.2",
      imdbVotes: "1,765,414",
      imdbID: "tt0068646",
      Type: "movie",
      DVD: "11 May 2004",
      BoxOffice: "$136,381,073",
      Production: "N/A",
      Website: "N/A",
      Response: "True"
    }
  ];


function HomeBannerCarousel() {
  const navigate = useNavigate();
  return (
    <Carousel style={{ position: 'relative', width: '100%', backgroundColor: 'red' }} >
      {slides.map((slide, index) => (
        <Carousel.Item key={index} className="carousel-item">
          <div className="carousel">
            <CarouselImageDiv image={slide.Poster} text={slide.Title} />
            <Carousel.Caption>
              <div className="caption">
                <h3>{slide.Title}</h3>
                <ul style={{ display: 'flex', justifyContent: 'flex-start', gap: '50px', fontWeight: '500' }}>
                  <li>{slide.Year}</li>
                  <li>{slide.Rated}</li>
                  <li>{slide.imdbRating}</li>
                  <li>{slide.Type.charAt(0).toUpperCase() + slide.Type.slice(1)}</li>
                </ul>
                <p>{slide.Plot}</p>
                <div className="btnDiv">
                  <button style={{ borderRadius: '10px' }}><FaPlay style={{ fontSize: '30px' }} /><span>Play</span></button>
                  <button style={{ borderRadius: '10px' }} onClick={()=>navigate(`/info/${slide.imdbID}`)}><FaInfoCircle style={{ fontSize: '30px' }} /><span>Info</span></button>
                </div>

              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default HomeBannerCarousel;
