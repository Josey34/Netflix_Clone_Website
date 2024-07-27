import axios from "axios";

const token= import.meta.env.REACT_APP_APITOKEN;
const apiKey = import.meta.env.REACT_APP_APIKEY;

export const getMovieList = async () => {
    
const movie = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/popular',
    params: {language: 'en-US', page: '1'},
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${token}`
    }
  };

  const response = await axios.request(movie)
  return response.data.results;
};

export const searchMovie = async (q) => {
    const search = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${q}&page=1&api_key=${apiKey}`);
    return search.data
};
