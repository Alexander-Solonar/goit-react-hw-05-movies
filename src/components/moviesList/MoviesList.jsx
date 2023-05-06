import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MoviesList.module.css';

const MovesList = ({ collection }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {collection.map(({ id, title, name, original_title, original_name }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title && original_title}
            {name && original_name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovesList.propTypes = {
  collection: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
      original_title: PropTypes.string,
      original_name: PropTypes.string,
    })
  ),
};

export default MovesList;
