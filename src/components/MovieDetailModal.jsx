import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { CgClose, CgPlayButton } from "react-icons/cg";
import { IoInformationCircleSharp } from "react-icons/io5";

const MovieDetailModal = ({ movie, imageUrl, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!movie) return null;

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
          <button
            onClick={handleClose}
            className="text-2xl absolute right-0 mr-6"
          >
            <CgClose />
          </button>
        </div>
        <div className="flex">
          <img
            src={`${imageUrl}${movie.poster_path}`}
            alt={movie.title}
            className="hidden md:block w-[300px] h-auto rounded-md mr-4"
          />
          <div className="w-[370px]">
            <h2 className="text-2xl font-bold pb-5 truncate">{movie.title}</h2>
            <div className="mb-4 overflow-hidden h-[150px] text-wrap text-justify">
              <p className="text-left">{movie.overview}</p>
            </div>
            <p>
              <strong>Release Date:</strong> {movie.release_date}
            </p>
            <p>
              <strong>Rating:</strong> {movie.vote_average}
            </p>
            <div className="mt-7 flex gap-5 cursor-pointer bottom-0 md:absolute md:mb-14">
              <button className="bg-white text-black flex text-2xl w-[100px] rounded-md items-center hover:bg-slate-300 hover:duration-300">
                <CgPlayButton className="text-4xl" /> Play
              </button>
              <button className="bg-slate-500 bg-opacity-70 rounded-md flex text-2xl items-center p-2 hover:bg-slate-600 hover:duration-300">
                <IoInformationCircleSharp className="mr-2" />
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MovieDetailModal.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }),
  imageUrl: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MovieDetailModal;
