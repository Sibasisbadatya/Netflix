import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import NetFlixLogo from '../../assets/Netflix.png'
import NetFlixSmallLogo from '../../assets/NetSmall.png'
import { FaSearch } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { Form, Container } from "react-bootstrap";
import searchContext from "../../contextAPI/contexts/searchContext";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import themeContext from "../../contextAPI/contexts/themeContext";
const NavBar = () => {
    const navigate = useNavigate();
    const movies = useSelector((state) => state.totalMovies);
    const [show, setShow] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const { isSearching, setIsSearching, setMovieSearchedFor } = useContext(searchContext);
    const { isDark, setTheme } = useContext(themeContext)
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
        <>
            <header className="header">
                <img
                    src={NetFlixLogo}
                    alt="Netflix logo"
                    className="logo bigLogo"
                    style={{ height: '100px' }}
                />
                <img
                    src={NetFlixSmallLogo}
                    alt="Netflix logo"
                    className="logo smallLogo"
                    style={{ height: '100px' }}
                />


                <nav className="nav-links">
                    <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
                    <NavLink to="/movies" className={({ isActive }) => (isActive ? "active" : "")}>Movies</NavLink>
                    <NavLink to="/latest" className={({ isActive }) => (isActive ? "active" : "")}>Latest</NavLink>
                    <NavLink to="/list" className={({ isActive }) => (isActive ? "active" : "")}>Lists</NavLink>
                    <NavLink to="/favourites" className={({ isActive }) => (isActive ? "active" : "")}>Favourites</NavLink>
                </nav>

                <nav className="nav-actions">
                    <button style={{ border: 'none' }} onClick={() => {
                        if (show) {
                            setIsSearching(false);
                            setSearchTerm("")
                        }
                        setShow(!show)
                    }} ><FaSearch className="search-icon" /><span className="search-word">Search</span></button>
                    {
                        isDark ? (
                            <CiLight onClick={() => setTheme(false)} color={'white'} className="theme-icon" />
                        ) : (
                            <MdDarkMode onClick={() => setTheme(true)} color={'white'} className="theme-icon" />
                        )
                    }

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
                                    onFocus={(e) => {
                                        setMovieSearchedFor(movies);
                                        navigate('/search');
                                    }}
                                    onChange={(e) => {
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
            {
                show && (
                    <div className="responsive-search">
                        <Container>
                            <Form.Control
                                type="text"
                                placeholder="Search movies..."
                                value={searchTerm}
                                onFocus={(e) => {
                                    setMovieSearchedFor(movies);
                                    navigate('/search');
                                }}
                                onChange={(e) => {
                                    searchMovies(movies, searchTerm);
                                    setIsSearching(true);
                                    setSearchTerm(e.target.value)
                                }}
                            />
                        </Container>
                    </div>
                )
            }
        </>
    );
};

export default NavBar;
