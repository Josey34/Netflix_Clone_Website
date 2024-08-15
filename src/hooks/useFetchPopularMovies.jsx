import { useState, useEffect } from "react";
import api from "../api/api";

export const useFetchPopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await api.getPopularMovies;
        setMovies(response.data.results);
      } catch (error) {
        setError("Error fetching popular movies: " + error.message);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    };

    fetchPopularMovies();
  }, []);

  return { movies, loading, error };
};
