import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { CgClose } from "react-icons/cg";

const GenreMovieModal = ({ movies, genreName, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Trigger the open animation
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-gray-800 text-white rounded-lg p-6 w-11/12 max-w-3xl transform transition-transform duration-300 ${
          isVisible ? "scale-100" : "scale-0"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{genreName} Movies</h2>
          <button onClick={handleClose} className="text-2xl">
            <CgClose />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto no-scrollbar max-h-[70vh] ">
          {movies.map((movie) => (
            <div key={movie.id} className="flex flex-col items-center ">
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="w-40 h-auto rounded-md mb-2 hover:border hover:cursor-pointer"
              />
              <p className="text-center text-xl font-bold">{movie.title}</p>
              <p className="text-center text-md font-semibold text-orange-300">⭐{movie.vote_average}</p>
              <p className="text-center text-sm text-slate-500">{movie.release_date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

GenreMovieModal.propTypes = {
  movies: PropTypes.array.isRequired,
  genreName: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default GenreMovieModal;
