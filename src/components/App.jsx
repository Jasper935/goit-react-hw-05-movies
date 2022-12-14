import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { Revievs } from './Revievs/Revievs';
import { NotFound } from 'Views/NotFound/NotFound';
import { lazy, Suspense } from 'react';



const HomeView = lazy(() => import('../Views/HomeView/HomeView'));
const MovieDetails = lazy(() => import('Views/MovieDetails/MovieDetails'));
const MoviesView = lazy(() => import('../Views/MoviesView/MoviesView'));
const Casts = lazy(() => import('./Casts/Casts'));
export const App = () => {
  return (
    <>
      <Navigation />
      <Suspense>
        <Routes>
          <Route index element={<HomeView />} />
          <Route path="/movies" element={<MoviesView />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
         
            <Route path="casts" element={<Casts />} />
            <Route path="reviews" element={<Revievs />} 
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};
