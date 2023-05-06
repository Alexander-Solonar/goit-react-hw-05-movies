import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layout';
const Home = lazy(() => import('../pages/home'));
const Movies = lazy(() => import('../pages/movies'));
const MovieDetails = lazy(() => import('pages/movieDetails'));
const CastList = lazy(() => import('./castList'));
const Reviews = lazy(() => import('./reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<CastList />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
