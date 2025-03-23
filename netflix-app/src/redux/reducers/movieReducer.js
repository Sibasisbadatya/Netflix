import {
    GET_DATA,
    GET_FAVOURITE,
    SET_FAVOURITE,
    GET_LIST,
    ADD_LIST,
    SET_LOADING,
    SET_ERROR,
    SET_SUCCESS,
    SET_REQUEST,
    SEARCH_MOVIE_BY_ID,
    ADD_WATCHED_MOVIE
} from "../actions/actionTypes/actionTypes";
import { movieDataKey, favMovieKey, myListKey, recentlyWatchedKey } from "../../services/localKeys"
import { movies } from "../../services/index.json";
console.log("data from json file", movies);

const localStorageKey = movieDataKey;

let movieData = [], favMovie = [], myList = [], recentlyWatched = [];
movieData = localStorage.getItem(localStorageKey);
favMovie = localStorage.getItem(favMovieKey);
myList = localStorage.getItem(myListKey);
recentlyWatched = localStorage.getItem(recentlyWatchedKey);
if (!movieData) {
    localStorage.setItem(localStorageKey, JSON.stringify(movies));
    movieData = JSON.stringify(movies);
}

let yearWiseMovie = [...JSON.parse(movieData)]
yearWiseMovie.sort((a, b) => Number(b.Year) - Number(a.Year));

let imdbWiseMovie = [...JSON.parse(movieData)];
imdbWiseMovie.sort((a, b) => parseFloat(b.imdbRating) - parseFloat(a.imdbRating));

const initialState = {
    totalMovies: JSON.parse(movieData),
    favMovie: JSON.parse(favMovie),
    myList: JSON.parse(myList),
    recentlyWatched: JSON.parse(recentlyWatched),
    trendingNow: yearWiseMovie,
    imdbWiseMovie,
    loading: false,
    error: "",
    currMovieInfo: null
}

export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REQUEST: {
            return { ...state, loading: true };
        }
        case ADD_LIST:
            return { ...state, movieList: action.payload };
        case SET_FAVOURITE:
            return { ...state, favMovie: action.payload };
        case ADD_WATCHED_MOVIE: {
            return { ...state, recentlyWatched: action.payload }
        }
        case SET_ERROR:
            return { ...state, error: action.payload, loading: false, error: action.error };
        case SET_SUCCESS:
            return { ...state, loading: false }
        case SEARCH_MOVIE_BY_ID:
            {
                console.log(action.payload);

                const movie = state.totalMovies.find(movie => movie.imdbID === action.payload);
                return {
                    ...state,
                    currMovieInfo: movie || null
                };
            }
        default:
            return state;
    }
};