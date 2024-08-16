import { useState } from "react";
import PropTypes from "prop-types";
import MovieDetailModal from "./MovieDetailModal"; // Import the new modal component

const MovieCard = ({ movie, imageUrl, setHovered }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex-shrink-0">
      <button onClick={handleImageClick}>
        <img
          className="w-[110px] md:w-[200px] md:h-[300px] object-cover rounded-lg hover:border-[3px] border-gray-400 cursor-pointer hover:scale-110 transition-all duration-150 ease-in-out"
          src={`${imageUrl}${movie.poster_path}`}
          alt={movie.title}
          onMouseEnter={() => setHovered(movie)}
          onMouseLeave={() => setHovered(null)}
        />
      </button>
      {isModalOpen && (
        <MovieDetailModal
          movie={movie}
          imageUrl={imageUrl}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }),
  imageUrl: PropTypes.string.isRequired,
  setHovered: PropTypes.func.isRequired,
};

export default MovieCard;
