import "./SearchForm.css";
import React from "react";

function SearchForm({onSubmit, movies, filterMovies, unFilterFilms}){
const [inputValue, setInputValue] = React.useState("")
const [checked, setChecked] = React.useState(false);

  function onSubmitHandler(e){
    e.preventDefault()
    onSubmit(inputValue)
    console.log(movies)
  }
  const handleChange = (e) => {
    const {value} = e.target;
    setInputValue(value);
    console.log(inputValue)
  }
  function checkBoxCheck(e){
    if (e.target.checked){
      setChecked(true)
    } else {
      setChecked(false)
    }
  }

    return(
        <div className="movies__search">
        <form className="movies__search-form" onSubmit={onSubmitHandler} >
          <input placeholder="Фильм" type="search" className="movies__input" onChange={handleChange} />
          <button type="submit" className="movies__search-icon_right" onSubmit={onSubmitHandler}>
            Найти
          </button>
          </form>
        <input type="checkbox" className="movies__checkbox" id="checkbox1" onChange={checkBoxCheck} onClick={checked ? unFilterFilms : filterMovies}></input>
        <label for="checkbox1" className="movies__checkbox-label">Короткометражки</label>
      </div>
    )
}

export default SearchForm;