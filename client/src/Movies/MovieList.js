import React from 'react';
import { Link } from 'react-router-dom'

export default function MovieList(props) {
  // const { movies } = props;
  return (
    //I can add a className or an onClick instead to get rid of the link appearance
    <div className="movie-list">
      {props.movies.map(movie => (
      <Link to={`/movies/${movie.id}`} >
        <MovieDetails key={movie.id} movie={movie} />
      </Link>
      ))}
    </div>
    
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
