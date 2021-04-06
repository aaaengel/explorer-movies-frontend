import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
function MoviesCardList(){

    return(
        <section className="movies__container">
        <div className="movies__list">
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
        </div>
        <button className="movies__more-button">Еще</button>
      </section>
    )
}

export default MoviesCardList;