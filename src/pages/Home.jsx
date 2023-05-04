import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import * as API from 'components/servise/api';

const Home = () => {
  const [colectins, setColectins] = useState([]);
  const location = useLocation();

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
      <h1>Trending today</h1>
      <ul>
        {colectins.map(({ id, title, name }) => (
          <li key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {title}
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
