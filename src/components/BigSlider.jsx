import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { CgPlayButton } from "react-icons/cg";
import { IoInformationCircleSharp } from "react-icons/io5";
import LoadingCircle from "./LoadingCircle";

const BigSlider = () => {
  const { movies, status } = useContext(MovieContext);

  const imageUrl = "https://image.tmdb.org/t/p/original";

  if (status.error.popular) {
    return <div>{status.error.popular}</div>;
  }

  return status.loading.popular ? (
    <LoadingCircle />
  ) : (
    <div className="flex overflow-x-hidden w-full no-scrollbar scroll-smooth justify-center">
      <div className="relative">
        <img
          src={imageUrl + (movies.popular[0]?.backdrop_path || "")}
          alt="movie poster"
          className="min-w-full object-cover"
        />
        <div className="hidden absolute inset-y-0 md:flex flex-col justify-center pl-[100px] lg:pl-[170px]">
          <h2 className="lg:text-6xl text-4xl font-bold pb-6">
            {movies.popular[0]?.title}
          </h2>
          <p className="lg:text-lg text-sm w-[650px] text-justify">
            {movies.popular[0]?.overview}
          </p>
          <div className="mt-7 flex gap-5 cursor-pointer">
            <button className="bg-white text-black flex text-2xl w-[100px] rounded-md items-center hover:bg-slate-300 hover:duration-300">
              <CgPlayButton className="text-4xl" /> Play
            </button>
            <button className="bg-slate-500 bg-opacity-70 rounded-md flex text-2xl items-center p-2 hover:bg-slate-600 hover:duration-300">
              <IoInformationCircleSharp className="mr-2" />
              More Info
            </button>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-b from-transparent to-black h-1/3 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default BigSlider;
