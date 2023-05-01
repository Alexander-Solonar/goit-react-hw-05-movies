import { Link } from 'react-router-dom';

const TrendingList = ({ movies }) => {
  return (
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
  );
};

export default TrendingList;
