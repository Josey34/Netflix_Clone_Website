import { createContext } from "react";
import { useFetchPopularMovies } from "../hooks/useFetchPopularMovies";
import { useFetchMoviesByGenre } from "../hooks/useFetchMoviesByGenre";
import PropTypes from "prop-types";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const {
    movies: popularMovies,
    loading: loadingPopular,
    error: errorPopular,
  } = useFetchPopularMovies();
  const { moviesByGenre, loadingByGenre, errorByGenre, fetchMoviesByGenre } =
    useFetchMoviesByGenre();

  const movies = {
    popular: popularMovies,
    byGenre: moviesByGenre,
  };

  const status = {
    loading: { popular: loadingPopular, byGenre: loadingByGenre },
    error: { popular: errorPopular, byGenre: errorByGenre },
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        fetchMoviesByGenre,
        status,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

MovieProvider.propTypes = {
  children: PropTypes.any,
};
