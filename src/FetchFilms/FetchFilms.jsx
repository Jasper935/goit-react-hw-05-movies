// import axios from 'axios';

// axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// const API_KEY = 'fdee5313a0b876498560bfe4baaab806';

// export const fetchTrends = async () => {
//   const response = await axios.get(`trending/all/day?api_key=${API_KEY}`);
//   return response.data.results;
// };

// export const fetchSearch = async () => {
//   const response = await axios.get(
//     `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
//   );

//   return response.data.results;
// };

import axios from 'axios';
//------------------------------------------------------//
const KEY_API = 'fdee5313a0b876498560bfe4baaab806';
const BASE_URL = 'https://api.themoviedb.org/3';
const defaultParams = {
  api_key: KEY_API,
};

const moviesApiClient = axios.create({
  baseURL: BASE_URL,
  params: defaultParams,
});

export const getPoPMovies = async () => {
  const { data } = await moviesApiClient.get('/trending/all/day');
  return data.results;
};
export const getSerchMovies = async query => {
  const { data } = await moviesApiClient.get('/search/movie', {
    params:{
        query
    }
  });
  return data;
};
export const getDetailsMovies = async id => {
  const { data } = await moviesApiClient.get(`movie/${id}`);
  return data;
};
export const getCastsMovies = async id => {
  const { data } = await moviesApiClient.get(`/movie/${id}/credits`);
  return data;
};
export const getRewiesMovies = async id => {
  const { data } = await moviesApiClient.get(`
/movie/${id}/reviews`);
  return data;
};