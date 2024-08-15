import GenreList from "../constant/GenreList";
import BigSlider from "./BigSlider";
import ListMovies from "./ListMovies";

const GenreMovieList = () => {
  return (
    <div className="min-h-screen">
      <BigSlider />
      {GenreList.genreList[0].genres.map(
        (item, index) =>
          index < 4 && (
            <div key={index} className="p-8 px-8 z-10">
              <div className="flex justify-between items-center mb-1 mr-[53px]">
                <h2 className="text-white font-medium text-2xl">{item.name}</h2>
                <p className="hover:underline cursor-pointer">See all</p>
              </div>
              <ListMovies genreId={item.id} index_={index} />
            </div>
          )
      )}
    </div>
  );
};

export default GenreMovieList;
