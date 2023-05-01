import { useState, useEffect } from 'react';
import TrendingList from 'components/trendingList/';
import * as API from 'components/servise/api';

const Home = () => {
  const [colectins, setColectins] = useState([]);

  useEffect(() => {
    (async () => {
      const movies = await API.fetchMovies(
        '/trending/all/day?api_key=95dd584af2ff777437c63600de03549c'
      );
      setColectins(movies.results);
    })();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <TrendingList movies={colectins}></TrendingList>
    </div>
  );
};

export default Home;
