import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "a92e1c28ff5839246667e5b68c28f141";

const getTrendingFilms = () => {
  return axios.get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
};
const getSearchFilms = (query) => {
  return axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
};
const getFilmsById = (id) => {
  return axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
};
const getFilmsCredits = (id) => {
  return axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
};
const getFilmsReviews = (id) => {
  return axios.get(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`);
};
export {
  getTrendingFilms,
  getSearchFilms,
  getFilmsById,
  getFilmsCredits,
  getFilmsReviews,
};
