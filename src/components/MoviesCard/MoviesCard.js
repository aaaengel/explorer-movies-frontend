import "./MoviesCard.css";
import iconLike from "../../images/save8d.svg";
import MovieSaved from "../../images/save8.svg";
import iconDelete from "../../images/d8.svg";
import testImage from "../../images/papich.jpg";
import { Route } from "react-router-dom";
import  React from "react";

function MoviesCard({image, title}) {
    const [saved, setSaved] = React.useState(false);
    function toogleLike(){
        if(saved === false){
            setSaved(true);
        } else{
            setSaved(false);
        }
    }
    return (
    <div className="movie"> 
    <img src={testImage} alt={title} className="movie__image" />
        <div className="movie__container">
            <div className="movie__like-button_and_caption">
                <p className="movie__like-caption">{title}тест</p>
                <p className="movie__time-caption">1ч42м</p>
            </div>
            <Route exact path="/movies">
                    <button className="movie__like-button" type="button" onClick={toogleLike}>
                        <img className="movie__like-button__image" src={saved ? MovieSaved : iconLike} alt="сердечко" />
                    </button>
                </Route>
                <Route exact path="/saved-movies">
                    <button className="movie__like-button" type="button">
                        <img className="movie__like-button__image" src={iconDelete} alt="крестик" />
                    </button>
                </Route>
        </div>
    </div>
    );
  }

  export default MoviesCard;