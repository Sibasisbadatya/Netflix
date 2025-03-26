import React, { useContext, useState,useMemo } from 'react';
import { Dropdown, DropdownButton, NavDropdown } from 'react-bootstrap';
import MovieSpecificCard from '../../components/MovieSpecificCard/MovieSpecificCard';
import './SearchPage.css';
import themeContext from '../../contextAPI/contexts/themeContext';
import { useSelector } from 'react-redux';
import searchContext from '../../contextAPI/contexts/searchContext';

const SearchPage = () => {
    const { isDark } = useContext(themeContext);
    const { movieSearchedFor } = useContext(searchContext);
    const [selectedFilter, setSelectedFilter] = useState('All');
    const [selectedGenre, setSelectedGenre] = useState('All');
    const genres = useSelector((state) => state.genres);
    const filteredMovies = useMemo(() => {
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
  
      return movies;
  }, [selectedGenre, selectedFilter, movieSearchedFor]);

    return (
        <div className="movie-page">
            <div className="movie-heading">
                <h1 style={{ width: '90vw', marginTop: '2rem', color: isDark ? 'white' : 'rgb(229, 9, 20)' }}>
                    Your Search Results:
                </h1>
            </div>
            <div className="filter-container" style={{ marginBottom: '20px', textAlign: 'center' }}>
                <Dropdown>
                    <Dropdown.Toggle variant="dark" id="filter-icon-dropdown">Filter</Dropdown.Toggle>
                    <Dropdown.Menu className='genre-menu'>
                        <NavDropdown title="Genre" id="genre-dropdown">
                            {genres.map((genre, index) => (
                                <NavDropdown.Item style={{backgroundColor:'#181818'}} key={index} onClick={() => setSelectedGenre(genre)}>
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