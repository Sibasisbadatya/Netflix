import {
    SET_FAVOURITE,
    SET_ERROR,
    SET_SUCCESS,
    SET_REQUEST,
    SEARCH_MOVIE_BY_ID,
    ADD_WATCHED_MOVIE,
    REMOVE_FAVOURITE,
    SET_LIST
} from "../actions/actionTypes/actionTypes";

import { movieDataKey, recentlyWatchedKey, currMovieKey } from "../../services/localKeys";
import { movies } from "../../services/index.json";

let movieData = localStorage.getItem(movieDataKey);
let recentlyWatched = localStorage.getItem(recentlyWatchedKey);
let currMovieInfo = localStorage.getItem(currMovieKey);

if (!movieData) {
    localStorage.setItem(movieDataKey, JSON.stringify(movies));
    movieData = JSON.stringify(movies);
}
if (!recentlyWatched) {
    localStorage.setItem(recentlyWatchedKey, JSON.stringify([]));
    recentlyWatched = JSON.stringify([]);
}

const genres = [
    ...new Set(
        JSON.parse(movieData).reduce((acc, movie) => {
            movie.Genre.split(", ").forEach(genre => acc.push(genre.trim()));
            return acc;
        }, [])
    )
];

const initialState = {
    totalMovies: JSON.parse(movieData),
    recentlyWatched: JSON.parse(recentlyWatched),
    loading: false,
    genres,
    error: "",
    currMovieInfo: currMovieInfo ? JSON.parse(currMovieInfo) : null
};


export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REQUEST:
            return { ...state, loading: true };

        case SET_LIST:
            return {
                ...state,
                totalMovies: action.payload,
                currMovieInfo: state.currMovieInfo && state.currMovieInfo.imdbID === action.movieId
                    ? { ...state.currMovieInfo, isListAdded: action.flag }
                    : state.currMovieInfo
            };

        case SET_FAVOURITE:
            return {
                ...state,
                totalMovies: action.payload,
                currMovieInfo: state.currMovieInfo && state.currMovieInfo.imdbID === action.movieId
                    ? { ...state.currMovieInfo, isFav: action.flag }
                    : state.currMovieInfo
            };

        case ADD_WATCHED_MOVIE:
            return { ...state, recentlyWatched: action.payload };

        case SET_ERROR:
            return { ...state, error: action.payload, loading: false };

        case SET_SUCCESS:
            return { ...state, loading: false };

        case SEARCH_MOVIE_BY_ID: {
            return { ...state, currMovieInfo: action.payload };
        }

        default:
            return state;
    }
};
