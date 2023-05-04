import { useState, useEffect, useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import * as API from 'components/servise/api';
import MovieDescription from 'components/moviedescription';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

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
      <Link to={backLinkHref.current}> ←Go back</Link>
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
      <Outlet />
    </div>
  );
};

export default MovieDetails;
