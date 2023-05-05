import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../servise/api';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);
  const [isReview, setIsReview] = useState(false);
  const [isNotReview, setIsNotReview] = useState(false);

  useEffect(() => {
    try {
      (async () => {
        const response = await API.reviewsMovies(movieId);
        response.length === 0 ? setIsNotReview(true) : setIsReview(true);
        setReview(response);
      })();
    } catch (error) {
      console.log(error.message);
    }
  }, [movieId]);

  return (
    <div>
      {isReview && (
        <ul className={css.list}>
          {review.map(({ author, content, id }) => (
            <li key={id}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
      {isNotReview && <h3>{'We do not have any rewiews for this movie'}</h3>}
    </div>
  );
};
export default Reviews;
