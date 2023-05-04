import css from './MovieDescription.module.css';

const MovieDescription = ({ information }) => {
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
      {poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
          alt={title}
        />
      )}
      <div>
        <h2 className={css.title}>
          {title} ({date})
        </h2>
        <p>User Score: {userScore}%</p>
        <h3 className={css.overview}>Overview</h3>
        <p>{overview}</p>
        <h4 className={css.genres}>Genres</h4>
        <p>{normalizeGanres}</p>
      </div>
    </div>
  );
};

export default MovieDescription;
