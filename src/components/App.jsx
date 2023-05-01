import { Routes, Route, Link } from 'react-router-dom';
import Layout from './layout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<p>ASassS</p>} />
          <Route path="reviews" element={<p>sxaxaxaxsax</p>} />
        </Route>
      </Route>
    </Routes>
  );
};
