import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchMovies = async query => {
  const response = await axios.get(query);
  return response.data;
};
