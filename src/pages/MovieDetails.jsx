import MovieDescription from 'components/moviedescription';
import { Link, Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=95dd584af2ff777437c63600de03549c&language=en-US`
      );
      setData(response.data);
    })();
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
