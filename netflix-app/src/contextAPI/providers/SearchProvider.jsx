
import searchContext from "../contexts/searchContext";
import React, { useState } from 'react'

const SearchProvider = (props) => {
    const [isSearching, setIsSearching] = useState(false);
    const [movieSearchedFor, setMovieSearchedFor] = useState([]);
    return (
        <>
            <searchContext.Provider value={{ isSearching, setIsSearching, movieSearchedFor, setMovieSearchedFor }}>
                {props.children}
            </searchContext.Provider>
        </>
    )
}

export default SearchProvider