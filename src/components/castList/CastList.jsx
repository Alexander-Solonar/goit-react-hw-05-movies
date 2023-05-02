import { useParams } from 'react-router-dom';
import * as API from '../servise/api';
import { useEffect, useState } from 'react';
import css from './CastList.module.css';

const CastList = () => {
  const { movieId } = useParams();
  const [actor, setActor] = useState([]);

  useEffect(() => {
    (async () => {
      const cast = await API.castMovies(movieId);
      setActor(cast);
    })();
  }, [movieId]);

  return (
    <ul className={css.list}>
      {actor.map(({ cast_id, character, name, profile_path }) => (
        <li key={cast_id}>
          <div className={css.image}>
            <img
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${profile_path}`}
              alt={name}
            />
          </div>
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

export default CastList;
