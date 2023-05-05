import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MoviesList.module.css';

const MovesList = ({ collection, locationFrom, path = '' }) => {
  return (
    <ul className={css.list}>
      {collection.map(({ id, title, name }) => (
        <li key={id}>
          <Link to={`${path + id}`} state={locationFrom}>
            {title}
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovesList.propTypes = {
  location: PropTypes.array,
  locationFrom: PropTypes.object.isRequired,
  path: PropTypes.string,
};

export default MovesList;
