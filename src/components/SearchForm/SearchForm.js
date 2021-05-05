import "./SearchForm.css";
import React from "react";

function SearchForm({onSubmit, movies}){
const [inputValue, setInputValue] = React.useState("")

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

    return(
        <div className="movies__search">
        <form className="movies__search-form" onSubmit={onSubmitHandler} >
          <input placeholder="Фильм" type="search" className="movies__input" onChange={handleChange} required />
          <button type="submit" className="movies__search-icon_right" onSubmit={onSubmitHandler}>
            Найти
          </button>
          </form>
        <input type="checkbox" className="movies__checkbox" id="checkbox1" ></input>
        <label for="checkbox1" className="movies__checkbox-label">Короткометражки</label>
      </div>
    )
}

export default SearchForm;