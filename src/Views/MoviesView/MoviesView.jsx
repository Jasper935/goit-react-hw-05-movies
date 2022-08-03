// import { Outlet } from "react-router-dom"
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useState } from 'react';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getSerchMovies } from 'FetchFilms/FetchFilms';
import { useEffect } from 'react';
 const MoviesView = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let search = searchParams.get('query') ?? '';
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  const getSearch = search => setSearchParams({ query: search });

  useEffect(() => {
    if (!search) {
      return;
    }
    getSerchMovies(search).then(res => setMovies(res.results));
  }, [search]);

  return (
    <>
      <SearchBar getSearch={getSearch} />
      {movies.length > 0 ? (
        <ul>
          {movies.map(({ title, name, id }) => {
            return (
              <li key={id}>
                <Link state={{ from: location }} to={`/movies/${id}`}>
                  <MovieItem title={title} name={name} />
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <h3>No movies here</h3>
      )}
    </>
  );
};

export default MoviesView