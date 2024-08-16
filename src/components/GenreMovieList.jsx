import { useState } from "react";
import GenreList from "../constant/GenreList";
import BigSlider from "./BigSlider";
import ListMovies from "./ListMovies";
import GenreMovieModal from "./GenreMovieModal";
import { useFetchMoviesByGenre } from "../hooks/useFetchMoviesByGenre";

const GenreMovieList = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const { moviesByGenre, fetchMoviesByGenre } = useFetchMoviesByGenre();

  const handleSeeAll = async (genreId, genreName) => {
    await fetchMoviesByGenre(genreId);
    setSelectedGenre({ id: genreId, name: genreName });
  };

  const handleCloseModal = () => {
    setSelectedGenre(null);
  };

  return (
    <div className="min-h-screen">
      <BigSlider />
      {GenreList.genreList[0].genres.map(
        (item, index) =>
          index < 4 && (
            <div key={index} className="p-8 px-8 z-10">
              <div className="flex justify-between items-center mb-1 mr-[53px]">
                <h2 className="text-white font-medium text-2xl">{item.name}</h2>
                <button
                  className="hover:underline cursor-pointer"
                  onClick={() => handleSeeAll(item.id, item.name)}
                >
                  See all
                </button>
              </div>
              <ListMovies genreId={item.id} />
            </div>
          )
      )}

      {selectedGenre && (
        <GenreMovieModal
          movies={moviesByGenre[selectedGenre.id] || []}
          genreName={selectedGenre.name}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default GenreMovieList;
