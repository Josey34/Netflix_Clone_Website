import axios from "axios";

const API_KEY = import.meta.env.VITE_APIKEY;
const BASE_URL = "https://api.themoviedb.org/3";

const getPopularMovies = axios.get(BASE_URL+'/movie/popular?api_key='+API_KEY)
const getMovieByGenreId = (id) => axios.get(BASE_URL+'/discover/movie?api_key='+API_KEY+'&with_genres='+id)

export default { getPopularMovies, getMovieByGenreId }