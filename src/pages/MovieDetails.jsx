import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import * as API from 'components/servise/api';
import MovieDescription from 'components/movieDescription';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    try {
      (async () => {
        const response = await API.ditailsMovies(movieId);
        setMovie(response);
      })();
    } catch (error) {
      console.log(error.message);
    }
  }, [movieId]);

  return (
    <div>
      <MovieDescription information={movie} />
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
