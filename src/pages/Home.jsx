import { useState, useEffect } from 'react';
import TrendingList from 'components/trendingList/';
import * as API from 'components/servise/api';

const Home = () => {
  const [colectins, setColectins] = useState([]);

  useEffect(() => {
    try {
      (async () => {
        const movies = await API.trendingMovies();
        setColectins(movies);
      })();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <div>
      <TrendingList movies={colectins}></TrendingList>
    </div>
  );
};

export default Home;
