import { useContext, useEffect, useRef, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import MovieCard from "./MovieCard";
import Loading from "./Loading";
import PropTypes from "prop-types";

const ListMovies = ({ genreId }) => {
  const { movies, fetchMoviesByGenre, status } = useContext(MovieContext);
  const containerRef = useRef();
  const [scroll, setScroll] = useState(0);
  const [hovered, setHovered] = useState(null)

  const ITEM_WIDTH = 500;
  const imageUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    fetchMoviesByGenre(genreId);
  }, [genreId, fetchMoviesByGenre]);

  const handleScroll = (scrollAmount) => {
    const newScroll = scroll + scrollAmount;
    setScroll(newScroll);
    containerRef.current.scrollLeft = newScroll;
  };

  if (status.error.byGenre[genreId]) {
    return <div>{status.error.byGenre[genreId]}</div>;
  }

  return (
    <>
      <div id="movieLine" className="relative flex items-center cursor-pointer">
        <button onClick={() => handleScroll(-ITEM_WIDTH)}>
          <MdChevronLeft size={50} />
        </button>

        {hovered && (
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-2 rounded z-10">
            {hovered.title}
          </div>
        )}

        <div
          className="flex gap-3 mb-8 overflow-x-scroll scroll-smooth whitespace-nowrap no-scrollbar py-5 px-3"
          ref={containerRef}
        >
          {movies.byGenre[genreId]?.map((movie, i) => {
            return status.loading.byGenre[genreId] ? (
             <Loading key={i} />
            ) : (
              <MovieCard key={i} movie={movie} imageUrl={imageUrl} setHovered={setHovered} />
            );
          })}
        </div>

        <button onClick={() => handleScroll(ITEM_WIDTH)}>
          <MdChevronRight size={50} />
        </button>
      </div>
    </>
  );
};

ListMovies.propTypes = {
  genreId: PropTypes.any,
}

export default ListMovies;
