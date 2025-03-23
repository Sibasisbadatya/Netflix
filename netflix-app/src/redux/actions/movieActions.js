import {
    GET_DATA,
    SET_DATA,
    GET_FAVOURITE,
    SET_FAVOURITE,
    ADD_LIST,
    GET_LIST,
    SET_REQUEST,
    SET_SUCCESS,
    SET_ERROR,
    SEARCH_MOVIE_BY_ID,
    ADD_WATCHED_MOVIE
} from "./actionTypes/actionTypes";

import { movieDataKey, favMovieKey, myListKey, recentlyWatchedKey } from "../../services/localKeys"


export const requestData = () => {
    return {
        type: SET_REQUEST
    }
}

export const setSuccess = () => {
    return {
        type: SET_SUCCESS
    }
}

export const setError = (err) => {
    return {
        type: SET_ERROR,
        paylod: err
    }
}

export const addWatchedMovies = (movie) => {
    const watchedMovies = JSON.parse(localStorage.getItem(recentlyWatchedKey)) || [];
    if (!watchedMovies.some((movie) => movie.imdbID === movie.imdbID)) {
        watchedMovies.push({ ...movie, lastWatch: new Date().toLocaleDateString() });
        localStorage.setItem(recentlyWatchedKey, JSON.stringify(watchedMovies));
    }
    return {
        type: ADD_WATCHED_MOVIE,
        payload: watchedMovies
    }
}

export const addList = (movie) => {
    const myLists = JSON.parse(localStorage.getItem(myListKey)) || [];
    if (!myLists.some((movie) => movie.imdbID === movie.imdbID)) {
        myLists.push(movie);
        localStorage.setItem(myListKey, JSON.stringify(myLists));
    }
    return {
        type: ADD_LIST,
        payload: myLists
    }
};


export const setFavourite = (movie) => {
    const favourites = JSON.parse(localStorage.getItem(favMovieKey)) || [];
    if (!favourites.some((fav) => fav.imdbID === movie.imdbID)) {
        favourites.push(movie);
        localStorage.setItem(favMovieKey, JSON.stringify(favourites));
    }
    return { type: SET_FAVOURITE, payload: favourites };
};

export const setCurrentMovie = (imdbId) => ({
    type: SEARCH_MOVIE_BY_ID,
    payload: imdbId
});