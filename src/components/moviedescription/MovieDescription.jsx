import { useState } from 'react';
import css from './MovieDescription.module.css';

const MovieDescription = ({ information }) => {
  const { poster_path, original_title, overview, genres } = information;

  console.log(information);
  return (
    <div className={css.container}>
      <div className={css.box}>
        <div className={css.image}>
          <img
            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${poster_path}`}
            alt=""
          />
        </div>
        <div>
          <h2 className={css.title}>{original_title}</h2>
          <p>User Score: </p>
          <h3 className={css.overview}>Overview</h3>
          <p>{overview}</p>
          <h4 className={css.genres}>Genres</h4>
          <p></p>
        </div>
      </div>

      <p className={css.inform}>Additional information</p>
    </div>
  );
};

export default MovieDescription;

// ('https://www.themoviedb.org/t/p/w600_and_h900_bestv2/A3hp8WNEi3iwjmlrcJgezL5hilc.jpg');
