import "./SearchForm.css";

function SearchForm(){

    return(
        <div className="movies__search">
        <form className="movies__search-form">
          <input placeholder="Фильм" type="search" className="movies__input" required />
          <button type="submit" className="movies__search-icon_right">
            Найти
          </button>
          </form>
        <input type="checkbox" className="movies__checkbox" id="checkbox1" ></input>
        <label for="checkbox1" className="movies__checkbox-label">Короткометражки</label>
      </div>
    )
}

export default SearchForm;