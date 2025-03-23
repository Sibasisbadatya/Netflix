import {
    SET_FAVOURITE,
    ADD_WATCHED_MOVIE,
    SET_REQUEST,
    SET_SUCCESS,
    SET_ERROR,
    SEARCH_MOVIE_BY_ID,
    REMOVE_FAVOURITE,
    SET_LIST
} from "./actionTypes/actionTypes";

import { movieDataKey, recentlyWatchedKey, currMovieKey } from "../../services/localKeys";


export const requestData = () => ({ type: SET_REQUEST });
export const setSuccess = () => ({ type: SET_SUCCESS });
export const setError = (err) => ({ type: SET_ERROR, payload: err });

export const addWatchedMovies = (movie) => {
    const watchedMovies = JSON.parse(localStorage.getItem(recentlyWatchedKey)) || [];
    if (!watchedMovies.some((watchedMovie) => watchedMovie.imdbID === movie.imdbID)) {
        watchedMovies.push({ ...movie, lastWatch: new Date() });
        localStorage.setItem(recentlyWatchedKey, JSON.stringify(watchedMovies));
    }
    return { type: ADD_WATCHED_MOVIE, payload: watchedMovies };
};

export const setList = (movie, flag) => {
    const allMovies = JSON.parse(localStorage.getItem(movieDataKey)) || [];

    const updatedMovies = allMovies.map((mov) =>
        mov.imdbID === movie.imdbID ? { ...mov, isListAdded: flag } : mov
    );

    localStorage.setItem(movieDataKey, JSON.stringify(updatedMovies));
    localStorage.setItem(currMovieKey, JSON.stringify({ ...movie, isListAdded: flag }));

    return { type: SET_LIST, payload: updatedMovies, movieId: movie.imdbID, flag };
};

export const setFavourite = (movie, flag) => {
    const allMovies = JSON.parse(localStorage.getItem(movieDataKey)) || [];

    const updatedMovies = allMovies.map((mov) =>
        mov.imdbID === movie.imdbID ? { ...mov, isFav: flag } : mov
    );

    localStorage.setItem(movieDataKey, JSON.stringify(updatedMovies));
    localStorage.setItem(currMovieKey, JSON.stringify({ ...movie, isFav: flag }));

    return { type: SET_FAVOURITE, payload: updatedMovies, movieId: movie.imdbID, flag };
};

export const setCurrentMovie = (imdbId) => ({ type: SEARCH_MOVIE_BY_ID, payload: imdbId });
