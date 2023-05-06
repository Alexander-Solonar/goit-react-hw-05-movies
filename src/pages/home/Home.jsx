import { useState, useEffect } from 'react';
import * as API from '../../servise/api';
import { Audio } from 'react-loader-spinner';
import MovesList from 'components/moviesList';
import css from './Home.module.css';

const Home = () => {
  const [collectionMovies, setCollectionMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const movies = await API.trendingMovies();
        setCollectionMovies(movies);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {isLoading && <Audio wrapperClass={css.loader} />}

      {!isLoading && !isError && <MovesList collection={collectionMovies} />}

      {isError && <h4>The resource you requested could not be found!</h4>}
    </div>
  );
};

export default Home;
