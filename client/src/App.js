import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SavedList from './Movies/SavedList';

import { Route, Switch } from 'react-router-dom'
//import components needed for the different routes
import MovieList from './Movies/MovieList'

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);


console.log(movieList) //we know this is working correctly


  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  
  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
      <Route path='/'>
        <MovieList movies={movieList} ></MovieList>
      </Route>  
    </div>
  );
}
