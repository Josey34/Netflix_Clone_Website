import PropTypes from "prop-types";

const MovieCard = ({ movie, imageUrl, setHovered }) => {
  return (
    <div className="flex-shrink-0">
      <img
        className="w-[110px] md:w-[200px] md:h-[300px] object-cover rounded-lg hover:border-[3px] border-gray-400 cursor-pointer hover:scale-110 transition-all duration-150 ease-in-out"
        src={`${imageUrl}${movie.poster_path}`}
        alt={movie.title}
        onMouseEnter={() => setHovered(movie)}
        onMouseLeave={() => setHovered(null)}
      />
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }),
  imageUrl: PropTypes.string.isRequired,
  setHovered: PropTypes.func.isRequired,
};

export default MovieCard;
