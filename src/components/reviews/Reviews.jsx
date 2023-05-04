import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../servise/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    try {
      (async () => {
        const response = await API.reviewsMovies(movieId);
        setReview(response);
      })();
    } catch (error) {
      console.log(error.message);
    }
  }, [movieId]);

  return (
    <div>
      {review.length === 0 ? (
        <h2>{'We do not have any rewiews for this movie'}</h2> //11111111111111111111111
      ) : (
        <ul>
          {review.map(({ author, content, id }) => (
            <li key={id}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
