import "./MoviesCard.css";
import iconLike from "../../images/save8d.svg";
import MovieSaved from "../../images/save8.svg";
import iconDelete from "../../images/d8.svg";
import { Route } from "react-router-dom";
import  React from "react";
import MainApi from "../../utils/MainApi"

function MoviesCard({card, key, onDelete, savedMovies, saveMovies}) {
    const [saved, setSaved] = React.useState(false);
    React.useEffect(() =>{
        const isSaved = savedMovies.find((savedMovie) => savedMovie.movieId === card.id);
        setSaved(isSaved);
    }, 
    [card, savedMovies])
    function deleteCard(){
        onDelete(card.id)
    }
    function checkIsSaved(){
        if(saved){
            console.log(card.id)
            onDelete(card.id)
        }else{
            console.log(card.id)
            MainApi.createMovie({
            country: card.country,
            director: card.director,
            duration: card.duration,
            year: card.year,
            description: card.description,
            image: card.image && card.image.url ? `https://api.nomoreparties.co${card.image.url}` : 'https://via.placeholder.com/360x200/778899/FFFFFF?text=Постер',
            trailer: card.trailerLink,
            movieId: card.id,
            nameRU: card.nameRU,
            nameEN: card.nameEN,
            thumbnail: card.trailerLink
            })
            .then(()=>{
                saveMovies()
            })
            .catch(err => console.log(err))
        }
    }
    //  function checkCard(){
    //      console.log(card.image);
    //     }
    return (
    <div className="movie" key={key}>
    <Route exact path="/movies">
        <img src={card.image && card.image.url
        ? `https://api.nomoreparties.co${card.image.url}`
        : 'https://via.placeholder.com/360x200/778899/FFFFFF?text=Постер'} alt="test" className="movie__image" />
    </Route>
    <Route exact path="/saved-movies">
        <img src={card.image    
        ? card.image
        : 'https://via.placeholder.com/360x200/778899/FFFFFF?text=Постер'} alt="test" className="movie__image" />
    </Route>
        <div className="movie__container">
            <div className="movie__like-button_and_caption">
                <p className="movie__like-caption">{card.nameRU}</p>
                <p className="movie__time-caption">{Math.floor(card.duration / 60) !== 0 ? `${Math.floor(card.duration / 60)}ч` : ""}{card.duration % 60 !== 0 ? `${card.duration % 60}м` : ""}</p>
            </div>
            <Route exact path="/movies">
                    <button className="movie__like-button" type="button" >
                        <img className="movie__like-button__image" src={saved ? MovieSaved : iconLike} onClick={checkIsSaved} alt="сердечко" />
                    </button>
                </Route>
                <Route exact path="/saved-movies">
                    <button className="movie__like-button" type="button">
                        <img className="movie__like-button__image" src={iconDelete} onClick={deleteCard} alt="крестик" />
                    </button>
                </Route>
        </div>
    </div>
    );
  }

  export default MoviesCard;