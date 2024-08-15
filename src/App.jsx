import { Route, Routes } from "react-router-dom";
import GenreMovieList from "./components/GenreMovieList";
import Layout from "./components/Layout";
import { MovieProvider } from "./context/MovieContext";

function App() {
  return (
    <>
      <MovieProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<GenreMovieList />} />
          </Route>
        </Routes>
      </MovieProvider>
    </>
  );
}

export default App;
