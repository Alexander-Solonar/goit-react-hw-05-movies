import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../servise/api';
import { Audio } from 'react-loader-spinner';
import defaultPicture from '../../defaultPicture/default-pic.jpg';
import css from './CastList.module.css';

const CastList = () => {
  const [actor, setActor] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const cast = await API.castMovies(movieId);
        setActor(cast);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Audio />}

      {!isLoading && !isError && (
        <ul className={css.list}>
          {actor.map(({ cast_id, character, name, profile_path }) => (
            <li key={cast_id}>
              <div className={css.image}>
                {profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                    alt={name}
                  />
                ) : (
                  <img src={defaultPicture} alt="Default-Pic" />
                )}
              </div>
              <div>{name}</div>
              <div>Character: {character}</div>
            </li>
          ))}
        </ul>
      )}

      {isError && <h4>The resource you requested could not be found!</h4>}
    </div>
  );
};

export default CastList;
