import { useParams, Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { getDetailsMovies } from 'FetchFilms/FetchFilms';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {Info, ImgAndInf, Casts, Button, Container } from './MovieDetails.styled';
import { NotFound } from 'Views/NotFound/NotFound';
 const MovieDetails = () => {
  const IMG = 'https://image.tmdb.org/t/p/w500';
  const [details, SetDetails] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    getDetailsMovies(movieId).then(data =>{
      
      SetDetails(data)}).catch(err=>'');
  }, [movieId]);

  return (
    <>
      {details.id ? (
        <Container>
          <ImgAndInf>
          <div>
          <h2>{details.title ? details.title : 'Not found'}</h2>
          <Button
              type="button"
              onClick={() => navigate(location?.state?.from ?? '/')}
            >
              Go back
            </Button>
            <img
              src={
                details.poster_path
                  ? `${IMG}${details.poster_path}`
                  : 'https://s1.hostingkartinok.com/uploads/images/2022/07/40ceaea2e22257d2a139ca5a0c0b8ba9.jpg'
              }
              alt={details.title}
            />
            </div>
          <Info>
            <h3>User score:</h3>
            <p>{Math.ceil(Number(details.vote_average)*10)}%</p>
            <h3>Overwievs</h3>
            <p>{details.overview ? details.overview : 'Not found overview'}</p>
            <h4>Genres</h4>
            <p>
              {details.genres && details.genres.length > 0
                ? details.genres.map(el => ' ' + el.name, '').join(',')
                : 'Not found'}
            </p>
          </Info>
          </ImgAndInf>
                <Casts>
          <p>Additional information</p>

          <Link state={{ from: location?.state?.from ?? '/' }} to="casts">
            Casts
          </Link>
          <br />
          <Link state={{ from: location?.state?.from ?? '/' }} to="reviews">
            Reviews
          </Link>
          <Outlet />
          </Casts>
        </Container>
      ):<NotFound/>}
    </>
  );
};

export default MovieDetails