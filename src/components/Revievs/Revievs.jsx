import { useEffect } from 'react';
import { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { getRewiesMovies } from 'FetchFilms/FetchFilms';
import { RevievsItem } from 'components/RevievsItem/RevievsItem';
export const Revievs = () => {
  const [revievs, setRevievs] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getRewiesMovies(movieId).then(data => setRevievs(data.results));
  }, [movieId]);

  return (
    <>
      {revievs.length > 0 ? (
        <ul>
          {revievs.map(({ author, id, content }) => {
            return (
              <li key={id}>
                <RevievsItem author={author} content={content} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Not found reviews</p>
      )}
    </>
  );
};
