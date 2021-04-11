import "./SavedMovies.css";
import ProtectedHeader from "../ProtectedHeader/ProtectedHeader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList"

function SavedMovies(){

    return(
        <div className="movies">
            <ProtectedHeader />
            <SearchForm />
            <div className="movies__container-line" />
            <MoviesCardList />
        </div>
    )
}

export default SavedMovies;