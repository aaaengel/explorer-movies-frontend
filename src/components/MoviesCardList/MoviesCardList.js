import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import React, {useState} from "react"
function MoviesCardList({movies, savedMovies, saveMovies, onDelete}){
  const [numberOfMovies, setNumberOfMovies] = useState(12);
  function addMoreMovies(){
    setNumberOfMovies(numberOfMovies + 4)
  }
return(
        <section className="movies__container">
        <div className="movies__list">
          <p class={movies.length === 0 ? "movies__nothing-found" : "movies__nothing-found_display"}>Ничего не найдено</p>
        {
        movies
          .slice(0, numberOfMovies).map((item) => (
                        <MoviesCard key={item._id} card={item} saveMovies={saveMovies} savedMovies={savedMovies} name={item.nameRU} onDelete={onDelete} />
                    )
          )}
        </div>
        <button className={movies.length > 12 ? "movies__more-button" : "movies__more-button_display"} onClick={addMoreMovies}>Еще</button>
      </section>
    )
}

export default MoviesCardList;