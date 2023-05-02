import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const trendingMovies = async () => {
  const response = await axios.get(
    '/trending/all/day?api_key=95dd584af2ff777437c63600de03549c'
  );
  return response.data.results;
};

export const ditailsMovies = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}?api_key=95dd584af2ff777437c63600de03549c&language=en-US`
  );
  return response.data;
};

export const castMovies = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=95dd584af2ff777437c63600de03549c&language=en-US`
  );
  return response.data.cast;
};

export const reviewsMovies = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=95dd584af2ff777437c63600de03549c&language=en-US&page=1`
  );
  return response.data.results;
};

export const searchMovies = async () => {
  const response = await axios.get(
    `search/movie?api_key=95dd584af2ff777437c63600de03549c&language=en-US&page=1&include_adult=false`
  );
  return response;
};
