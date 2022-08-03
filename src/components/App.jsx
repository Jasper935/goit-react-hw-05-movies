import { MovieDetails } from 'Views/MovieDetails/MovieDetails';
import { Route, Routes } from 'react-router-dom';
// import  HomeView  from '../Views/HomeView/HomeView';
import { MoviesView } from '../Views/MoviesView/MoviesView';
import { Navigation } from './Navigation/Navigation';
import { Casts } from './Casts/Casts';
import { Revievs } from './Revievs/Revievs';
import { NotFound } from 'Views/NotFound/NotFound';
import { lazy, Suspense } from 'react';
const HomeView = lazy(()=>import('../Views/HomeView/HomeView'))

export const App = () => {
  return (
    <>
    
      <Navigation />
      <Suspense >
      <Routes>
        <Route index element={<HomeView />} />
        <Route path="/movies" element={<MoviesView />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="casts" element={<Casts />} />
          <Route path="reviews" element={<Revievs />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
    </>
  );
};
