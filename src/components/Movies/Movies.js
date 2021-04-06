import ProtectedHeader from "../ProtectedHeader/ProtectedHeader";
import"./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList"

function Movies() {
    return (
    <div class="movies">
      <ProtectedHeader />
      <SearchForm />
      <div className="movies__container-line" />
      <MoviesCardList />
      </div>
    );
  }
  
  export default Movies;