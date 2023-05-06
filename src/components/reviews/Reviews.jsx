import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../servise/api';
import { Audio } from 'react-loader-spinner';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);
  const [isReview, setIsReview] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await API.reviewsMovies(movieId);
        response.length === 0 && setIsReview(false);
        setReview(response);
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
        <div>
          {isReview ? (
            <ul className={css.list}>
              {review.map(({ author, content, id }) => (
                <li key={id}>
                  <h4>Author: {author}</h4>
                  <p>{content}</p>
                </li>
              ))}
            </ul>
          ) : (
            <h3>We do not have any rewiews for this movie</h3>
          )}
        </div>
      )}

      {isError && <h4>The resource you requested could not be found!</h4>}
    </div>
  );
};

export default Reviews;
