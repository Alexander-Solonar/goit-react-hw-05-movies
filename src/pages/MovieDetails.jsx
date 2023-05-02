import MovieDescription from 'components/moviedescription';
import { Link, Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as API from 'components/servise/api';

const MovieDetails = () => {
  const [data, setData] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    try {
      (async () => {
        const movie = await API.ditailsMovies(movieId);
        setData(movie);
      })();
    } catch (error) {
      console.log(error.message);
    }
  }, [movieId]);

  return (
    <div>
      <MovieDescription information={data} />
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;
