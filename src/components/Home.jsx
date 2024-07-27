import { useEffect, useRef, useState } from "react";
import { getMovieList } from "../api/api";
import moviePoster from "../assets/movie-poster.jpg";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [scroll, setScroll] = useState(0);

  const ITEM_WIDTH = 500;

  const imageUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    getMovieList().then((result) => {
      setMovies(result);
    });
  }, []);

  const containerRef = useRef();

  const handleScroll = (scrollAmount) => {
    const newScroll = scroll + scrollAmount;
    setScroll(newScroll);

    containerRef.current.scrollLeft = newScroll;
  };

  return (
    <div className="min-h-screen">
      <img src={moviePoster} alt="" className="min-w-full" />
      <h3 className="ml-9 mx-auto font-medium text-2xl py-2.5">
        Popular Movies
      </h3>
      <div id="movieLine" className="relative flex items-center cursor-pointer">
        <button onClick={() => handleScroll(-ITEM_WIDTH)} >
          <MdChevronLeft size={60} />
        </button>
        <div
          className="flex gap-3 w-full h-full mb-8 overflow-x-scroll scroll-smooth whitespace-nowrap no-scrollbar"
          ref={containerRef}
        >
          {movies.map((movie, i) => (
            <div className="flex-shrink-0 w-[150px] h-[200px]" key={i}>
              <img
                className="w-full h-full object-cover"
                src={`${imageUrl}${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
          ))}
        </div>
        <button onClick={() => handleScroll(ITEM_WIDTH)}>
          <MdChevronRight size={60} />
        </button>
      </div>
    </div>
  );
};

export default Home;
