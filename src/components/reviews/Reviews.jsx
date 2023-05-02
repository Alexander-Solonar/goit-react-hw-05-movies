import { useParams } from 'react-router-dom';
import * as API from '../servise/api';
import { useEffect, useState } from 'react';

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
  console.log(review);
  return <div>Hello!</div>;
};

export default Reviews;
