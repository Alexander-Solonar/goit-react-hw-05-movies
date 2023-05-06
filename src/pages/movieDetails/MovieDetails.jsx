import { useState, useEffect, Suspense, useRef } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { Audio } from 'react-loader-spinner';
import * as API from '../../servise/api';
import MoviePreview from 'components/moviePreview/MoviePreview';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await API.ditailsMovies(movieId);
        setMovie(response);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId]);

  return (
    <div className={css.container}>
      <Link to={backLinkHref.current}>←Go back</Link>

      {isLoading && <Audio wrapperClass={css.loader} />}

      {!isLoading && !isError && (
        <div>
          <MoviePreview information={movie} />
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
      )}

      {isError && <h1>The resource you requested could not be found!</h1>}
    </div>
  );
};

export default MovieDetails;
