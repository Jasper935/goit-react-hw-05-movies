import { CastsItem } from 'components/CastsItem/CastsItem';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCastsMovies } from 'FetchFilms/FetchFilms';
import { useState } from 'react';

export const Casts = () => {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCastsMovies(movieId)
      .then(res => setCasts(res.cast))
      .catch();
  }, [movieId]);

  return (
    <>
      {casts ? (
        <ul>
          {casts.map(el => {
            return (
              <li key={el.id}>
                <CastsItem
                  img={
                    el.profile_path
                      ? el.profile_path
                      : 'https://s1.hostingkartinok.com/uploads/images/2022/07/40ceaea2e22257d2a139ca5a0c0b8ba9.jpg'
                  }
                  name={el.name ? el.name : 'Not found'}
                />{' '}
              </li>
            );
          })}
          <li></li>
        </ul>
      ) : (
        <p>No info</p>
      )}
    </>
  );
};
