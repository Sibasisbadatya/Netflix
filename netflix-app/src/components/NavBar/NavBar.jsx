import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import NetFlixLogo from '../../assets/Netflix.png'
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Modal, Button, Form, Container } from "react-bootstrap";
import searchContext from "../../contextAPI/contexts/searchContext";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
const NavBar = () => {
    const navigate = useNavigate();
    const movies = useSelector((state) => state.totalMovies);
    const [show, setShow] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const { isSearching, setIsSearching, setMovieSearchedFor } = useContext(searchContext);
    const searchMovies = (movies, searchTerm) => {
        if (!searchTerm) {
            setMovieSearchedFor(movies);
            return;
        }
        const searchedmovies = movies.filter(movie =>
            movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setMovieSearchedFor(searchedmovies);
    };

    useEffect(() => {
        if (searchTerm === "") {
            setIsSearching(false);
        }
    }, [searchTerm])
    return (
        <header className="header">
            <img
                src={NetFlixLogo}
                alt="Netflix logo"
                className="logo"
                style={{ height: '100px' }}
            />

            <nav className="nav-links">
                <NavLink to="/" activeClassName="active">Home</NavLink>
                <NavLink to="/movies" activeClassName="active">Movies</NavLink>
                <NavLink to="/latest" activeClassName="active">Latest</NavLink>
                <NavLink to="/list" activeClassName="active">My List</NavLink>
                <NavLink to="/favourites" activeClassName="active">Favourites</NavLink>
            </nav>

            <nav className="nav-actions">
                <button onClick={() => {
                    if (show) {
                        setIsSearching(false);
                        setSearchTerm("")
                    }
                    setShow(!show)
                }} ><FaSearch />Search</button>
                <img
                    src="https://randomuser.me/api/portraits/women/3.jpg"
                    alt="User profile"
                    className="profile-image"
                />
                {show && (
                    <div className="search-box">
                        <Container>
                            <Form.Control
                                type="text"
                                placeholder="Search movies..."
                                value={searchTerm}
                                onChange={(e) => {
                                    navigate('/search');
                                    searchMovies(movies, searchTerm);
                                    setIsSearching(true);
                                    setSearchTerm(e.target.value)
                                }}
                            />
                        </Container>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default NavBar;
