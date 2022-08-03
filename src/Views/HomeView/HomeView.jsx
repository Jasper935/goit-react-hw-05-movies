import {
  getPoPMovies
} from 'FetchFilms/FetchFilms';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

 const HomeView = () => {
  const [trends, setTrends] = useState([]);
  const location = useLocation();
  useEffect(() => {
    getPoPMovies().then(setTrends);
  }, []);

  return (
    <ul>
      {trends.map(el => {
        return (
          <li key={el.id}>
            <Link
              state={{ from: location.pathname }}
              to={`/movies/${el.id}`}
              id={el.id}
            >
              <p>{el.title ? el.title : el.name}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default HomeView