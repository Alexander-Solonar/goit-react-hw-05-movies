import PropTypes from 'prop-types';
import defaultPicture from '../../defaultPicture/default-pic.jpg';
import css from './MoviePreview.module.css';

const MoviePreview = ({ information }) => {
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
      {poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
          alt={title}
        />
      ) : (
        <img src={defaultPicture} alt="Default-Pic" width="200" />
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
