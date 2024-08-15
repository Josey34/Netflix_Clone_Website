import { useState, useCallback } from "react";
import api from "../api/api";

export const useFetchMoviesByGenre = () => {
  const [moviesByGenre, setMoviesByGenre] = useState({});
  const [loadingByGenre, setLoadingByGenre] = useState({});
  const [errorByGenre, setErrorByGenre] = useState({});

  const fetchMoviesByGenre = useCallback(
    async (genreId) => {
      // Check if the genre is already fetched to prevent infinite re-fetching
      if (moviesByGenre[genreId]?.length > 0) return;

      setLoadingByGenre((prev) => ({ ...prev, [genreId]: true }));
      setErrorByGenre((prev) => ({ ...prev, [genreId]: null }));

      try {
        const response = await api.getMovieByGenreId(genreId);
        setMoviesByGenre((prev) => ({
          ...prev,
          [genreId]: response.data.results,
        }));
      } catch (error) {
        setErrorByGenre((prev) => ({
          ...prev,
          [genreId]: "Error fetching movies by genre: " + error.message,
        }));
      } finally {
        setTimeout(() => {
          setLoadingByGenre((prev) => ({ ...prev, [genreId]: false }));
        }, 2000);
      }
    },
    [moviesByGenre]
  );

  return { moviesByGenre, loadingByGenre, errorByGenre, fetchMoviesByGenre };
};
