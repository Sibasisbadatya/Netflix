
# Project Overview

### Custom Movie Streaming Platform  

This project is a movie streaming platform inspired by Netflix but with a unique touch, focusing entirely on frontend development. The platform enables users to browse a collection of movies, view detailed information, search for specific titles, and filter content by categories. Additionally, users can add movies to their favorites list for easy access.  

A key feature of the platform is the dark mode toggle, allowing users to switch between light and dark themes for a personalized viewing experience. The UI is built using **React, HTML, CSS, Bootstrap, and JavaScript**, ensuring a responsive and visually appealing interface. While the design and user experience take inspiration from Netflix, this project introduces its own styling and layout enhancements.  

This project serves as a demonstration of frontend development skills, showcasing **state management, component reusability, dynamic rendering, and responsive design** to create a seamless and interactive user experience.



# Description:  
This project is a **Netflix-inspired movie streaming UI** (Frontend Only) built with **React, JavaScript, HTML, CSS, and Bootstrap**. It provides a **responsive and interactive experience**, allowing users to:  

- Browse movie listings  
- View movie details  
- Search for movies  
- Filter by genre  
- Add movies to a favorites list  
- Toggle between light and dark mode  

The focus is on creating a **visually appealing and user-friendly** interface.


# Data Reference

#### Get all items

```
  All datas are impoorted from netflix-app/src/services/index.json

Its an array of Objects
for example
 {
            "Title": "The Shawshank Redemption",
            "Year": "1994",
            "Rated": "R",
            "Released": "14 Oct 1994",
            "Runtime": "142 min",
            "Genre": "Drama",
            "Director": "Frank Darabont",
            "Writer": "Stephen King, Frank Darabont",
            "Actors": "Tim Robbins, Morgan Freeman, Bob Gunton",
            "Plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            "Language": "English",
            "Country": "United States",
            "Awards": "Nominated for 7 Oscars. 21 wins & 43 nominations total",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "9.3/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "91%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "81/100"
                }
            ],
            "Metascore": "81",
            "imdbRating": "9.3",
            "imdbVotes": "2,559,562",
            "imdbID": "tt0111161",
            "Type": "movie",
            "DVD": "21 Dec 1999",
            "BoxOffice": "$28,767,189",
            "Production": "N/A",
            "Website": "N/A",
            "Response": "True"
        }
```


# Tech Stack  

**Client:** React, Redux, HTML, CSS, JavaScript  

**Libraries Used:**  
- react-slick (for banner carousel)  
- react-router 

# Project Goals  

- Build an industry-standard, fully responsive UI using **React, Bootstrap, and CSS**.  
- Implement dynamic rendering of movie content using **JavaScript**.  
- Use **React Router** for navigation between different pages.  
- Store favorite movies in **LocalStorage** for persistence.  
- Implement a **dark mode toggle** for better user experience.  
- Deploy the project on **Netlify or Vercel** and submit it on **GitHub**.  

# Installation

Install my-project with npm

```bash
  git clone https://github.com/Sibasisbadatya/Netflix.git
```
```bash
  cd netflix-app
```
```bash
  npm install or npm install --force
```
```bash
  npm run dev
```
    
## Deployment

This project was built using **React** and deployed on **Vercel** for seamless hosting and performance.  
Follow https://youtu.be/VigFI4TuwzI?si=ONb25aPOjCAhGQEw

 # Project structure of App
-----------------------------------------

```
└───src
    ├───assets
    │   └───CarouselImages        
    ├───components
    │   ├───CarouselComponents    
    │   ├───ErrorBoundary
    │   ├───MovieCard
    │   ├───MovieInfo
    │   ├───MovieModal
    │   ├───MovieSlider
    │   ├───MovieSpecificCard     
    │   ├───MovieSpecificCarousel 
    │   ├───NavBar
    │   ├───NavBarDropdown
    │   └───slickerSetting        
    ├───contextAPI
    │   ├───contexts
    │   └───providers
    ├───pages
    │   ├───CommonPageEnding      
    │   ├───Favourite
    │   ├───Footer
    │   ├───Movies
    │   ├───MyList
    │   ├───NewAndPopular
    │   ├───Page404
    │   └───SearchPage
    ├───redux
    │   ├───actions
    │   │   └───actionTypes
    │   └───reducers
    └───services

    
    Here in each Folder in COmponents and Pages there exist JSX and corresponding CSS File.

    In contextAPI folder there are 2 Context (ThemeContext and Search Context);

    In Service there exist file for Movies data and LocalStorage keys.

```

# Coding Standards
```
✔️ Avoid code duplication.
✔️ Write concise & clear code.
✔️ Avoid writing unnecessary code for future assumptions.
✔️ Consistent Naming Conventions – Use meaningful variable & function names
✔️ Comment Important Sections – Explain complex logic with concise comments.
✔️ Use PascalCase for Component files – Example: MovieCard.js, SearchPage.js.
✔️ Avoid inline styles unless necessary – Use classNames for better maintainability.
✔️ Use useSelector & useDispatch for Redux interactions – Avoid prop drilling.
✔️ Use Console Log Wisely – Remove unnecessary console.log() before deployment.
```

# State Management
```
✔️ Use useSelector & useDispatch – Avoid prop drilling by fetching state inside components.
✔️ Normalize State – Store data in a structured format (avoid deeply nested objects).

for example :

const reduxData = {
    totalMovies,
    recentlyWatched,
    loading,
    genres,
    error,
    currMovieInfo,
};

✔️ Avoid Storing Unnecessary Data – Store only essential information in the global state.
🛑 Common Mistakes to Avoid

❌ Mutating state directly – Always return a new state object in reducers.
❌ Overusing Redux for local states – Use useState for UI-specific states (like modal visibility).

├───actions
│   └───actionTypes
└───reducers

In action we have actionTypes
export const SET_DATA = 'SET_DATA'
export const GET_DATA = 'GET_DATA'
export const GET_FAVOURITE = "GET_FAVOURITE";
export const SET_FAVOURITE = "SET_FAVOURITE";
export const ADD_LIST = "ADD_LIST";
export const GET_LIST = "GET_LIST";
export const SEARCH_MOVIE_BY_ID = "SEARCH_MOVIE_BY_ID"
export const ADD_WATCHED_MOVIE = "ADD_WATCHED_MOVIE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";
export const SET_LIST = "REMOVE_LIST";


In movieAction file we have the functionality of 

addWatchedMovies(movie)
            Retrieves the recently watched movies from localStorage.
            Checks if the movie is already in the list to avoid duplication.
            If not present, adds the movie along with the timestamp (lastWatch).
            Updates localStorage and Redux store.

setList(movie, flag)
            Retrieves all movies from localStorage.
            Updates the isListAdded property of the specific movie.
            Saves the updated list back to localStorage.
            Dispatches an action to update Redux store.

setFavourite(movie, flag)
            Retrieves all movies from localStorage
            Updates the isFav property for the selected movie.
            Saves the updated list back to localStorage.
            Dispatches an action to update Redux store.

setCurrentMovie(imdbId)
            Retrieves all movies from localStorage.
            Finds the movie with the given imdbID.
            Stores the selected movie in localStorage.
            Dispatches an action to update Redux store with the current movie.


In Reducer file we have 

SET_REQUEST
            Sets loading: true, indicating that a request is in progress.

SET_LIST
            Updates totalMovies with the new list containing updated "list added" (isListAdded) status.
            If the currently selected movie (currMovieInfo) matches the updated movie, it also updates its status.

SET_FAVOURITE
            Updates totalMovies with the new list containing updated "favorite" (isFav) status.
            Ensures currMovieInfo is also updated if the current movie is affected.

ADD_WATCHED_MOVIE
            Updates recentlyWatched list with the latest watched movies.

SEARCH_MOVIE_BY_ID
            Updates currMovieInfo with the details of the searched movie.

default
            Returns the current state if no matching action type is found.
```




# Reusability and Component Design
```
✅ Keep Components Small & Reusable – Avoid monolithic components.
✅ Use Props, Context, and Redux – Pass data efficiently.
✅ Follow Atomic Design – Organize UI effectively.
✅ Optimize Performance – Implement lazy loading & memoization.
✅ Ensure Accessibility – Follow a11y best practices.
```
# Theme Purposes
```
✅ Used Context API – Manage themes globally.
✅ Applied CSS Variables – Easily switch between themes.
✅ Ensure Theme Consistency – Apply styles dynamically to all components.
```
# Future Improvements
```
✅ AI-Based Recommendations: Use machine learning to recommend movies based on watch history.

✅ Download Feature: Allow users to save movies for offline viewing.

✅ Live Streaming Support: If you plan to add live events or shows.
```

# Debug Guide
```
✅ Check the console first – Many issues are logged there.
✅ Restart the server – Fixes many backend-related issues.
✅ Clear cache & refresh – Use Ctrl+Shift+R to force refresh.
✅ Google error messages – Stack Overflow and GitHub often have solutions.
```
