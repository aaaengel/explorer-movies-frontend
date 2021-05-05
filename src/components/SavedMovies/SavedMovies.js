import "./SavedMovies.css";
import ProtectedHeader from "../ProtectedHeader/ProtectedHeader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies({movies, savedMovies, saveMovies, onDelete}){

    return(
        <div className="movies">
            <ProtectedHeader />
            <SearchForm />
            <div className="movies__container-line" />
            <MoviesCardList movies={movies} saveMovies={saveMovies} onDelete={onDelete} savedMovies={savedMovies} />
            <Footer />
        </div>
    )
}

export default SavedMovies;