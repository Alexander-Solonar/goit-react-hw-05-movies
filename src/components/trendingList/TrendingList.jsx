import { Link } from 'react-router-dom';
import css from './TrendingList.module.css';

const TrendingList = ({ movies }) => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Trending today</h1>
      <ul>
        {movies.map(({ id, title, name }) => (
          <li key={id}>
            <Link to={`movies/${id}`}>
              {title}
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingList;
