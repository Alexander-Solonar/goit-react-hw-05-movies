import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './moviePreview.module.css';

const MoviePreview = ({ information }) => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  const {
    poster_path,
    title,
    overview,
    release_date = '',
    genres = [],
    vote_average,
  } = information;

  const userScore = Math.round(vote_average * 10);
  const normalizeGanres = genres.map(el => el.name).join(' ');
  const date = release_date.slice(0, 4);

  return (
    <div className={css.container}>
      <Link to={backLinkHref.current} className={css['btn-back']}>
        ←Go back
      </Link>
      <div className={css.inner}>
        {poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
            alt={title}
          />
        )}
        <div className={css['boix-inform']}>
          <h2>
            {title} ({date})
          </h2>
          <p>User Score: {userScore}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{normalizeGanres}</p>
        </div>
      </div>
    </div>
  );
};

MoviePreview.propTypes = {
  information: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    overview: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    genres: PropTypes.array,
  }),
};

export default MoviePreview;
