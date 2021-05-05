import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
function MoviesCardList({movies, savedMovies, saveMovies, onDelete}){
return(
        <section className="movies__container">
        <div className="movies__list">
        {movies.map((item) => (
                        <MoviesCard key={item._id} card={item} saveMovies={saveMovies} savedMovies={savedMovies} name={item.nameRU} onDelete={onDelete} />
                    )
          )}
        </div>
        <button className="movies__more-button">Еще</button>
      </section>
    )
}

export default MoviesCardList;