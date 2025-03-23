import React, { useContext, useEffect, useState } from 'react';
import { Dropdown, DropdownButton, NavDropdown } from 'react-bootstrap';
import { FaFilter } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import searchContext  from '../../contextAPI/contexts/searchContext';
import MovieSpecificCard from '../../components/MovieSpecificCard/MovieSpecificCard';

const SearchPage = () => {
  const { movieSearchedFor } = useContext(searchContext);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const genres = useSelector((state) => state.genres);
  const [filteredMovies, setFilteredMovies] = useState(movieSearchedFor);

  useEffect(() => {
    let movies = [...movieSearchedFor];
    if (selectedFilter === 'Old') {
      movies.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
    } else if (selectedFilter === 'New') {
      movies.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
    } else if (selectedFilter === 'Rating') {
      movies.sort((a, b) => parseFloat(b.imdbRating) - parseFloat(a.imdbRating));
    }
    if (selectedGenre !== 'All') {
      movies = movies.filter((movie) => movie.Genre.split(', ').includes(selectedGenre));
    }
    setFilteredMovies(movies);
  }, [selectedGenre, selectedFilter, movieSearchedFor]);

  return (
    <div className="movie-page">
      <div className="movie-heading">
        <h1>Movies</h1>
        <h3>
          Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic, or anywhere in between.
        </h3>
      </div>
      <div className="filter-container" style={{ marginBottom: '20px', textAlign: 'center' }}>
        <Dropdown>
          <Dropdown.Toggle variant="dark" id="filter-icon-dropdown">
            <FaFilter size={20} /> {/* Filter Icon */}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <NavDropdown title="Genre" id="genre-dropdown">
              {genres.map((genre, index) => (
                <NavDropdown.Item key={index} onClick={() => setSelectedGenre(genre)}>
                  {genre}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Dropdown.Item onClick={() => setSelectedFilter('Rating')}>Rating Wise</Dropdown.Item>
            <Dropdown.Item onClick={() => setSelectedFilter('New')}>Newest</Dropdown.Item>
            <Dropdown.Item onClick={() => setSelectedFilter('Old')}>Oldest</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="movies-body">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie, index) => (
            <MovieSpecificCard key={index} movie={movie} />
          ))
        ) : (
          <h2 style={{ color: 'white', textAlign: 'center' }}>
            No results found for {selectedFilter === 'All' ? selectedGenre : selectedFilter}. Try another filter!
          </h2>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
