import "./MoviesCard.css";
import iconLike from "../../images/saveIcon.svg";
import iconDelete from "../../images/deleteIcon.svg";
import testImage from "../../images/papich.jpg";
import { Route } from "react-router-dom";

function MoviesCard({image, title}) {
    return (
    <div className="movie">
        <img src={testImage} alt={title} className="movie__image" />
        <div className="movie__like-button_and_caption">
            <p className="movie__like-caption">{title} тест</p>
            <Route exact path="/movies">
                <button className="movie__like-button" type="button">
                    <img className="movie__like-button__image" src={iconLike} alt="сердечко" />
                </button>
            </Route>
            <Route exact path="/saved-movies">
                <button className="movie__like-button" type="button">
                    <img className="movie__like-button__image" src={iconDelete} alt="крестик" />
                </button>
            </Route>
        </div>
        <div className="movies-card__container-line" />
        <p className="movie__time-caption">1ч42м</p>
    </div>
    );
  }

  export default MoviesCard;