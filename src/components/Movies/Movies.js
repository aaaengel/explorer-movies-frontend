import ProtectedHeader from "../ProtectedHeader/ProtectedHeader";
import"./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies({onFindMovies, movies, savedMovies, saveMovies, onDelete}) {
    return (
    <div class="movies">
      <ProtectedHeader />
      <SearchForm onSubmit={onFindMovies}  movies={movies} />
      <div className="movies__container-line" />
      <MoviesCardList movies={movies} saveMovies={saveMovies} onDelete={onDelete} savedMovies={savedMovies} />
      <Footer />
      </div>
    );
  }
  
  export default Movies;