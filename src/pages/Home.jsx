import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as API from 'components/servise/api';
import MovesList from 'components/moviesList';

const Home = () => {
  const [collectionMovies, setCollectionMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    try {
      (async () => {
        const movies = await API.trendingMovies();
        setCollectionMovies(movies);
      })();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MovesList
        collection={collectionMovies}
        locationFrom={{ from: location }}
        path={'movies/'}
      />
    </div>
  );
};

export default Home;
