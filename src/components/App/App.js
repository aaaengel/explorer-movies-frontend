import './App.css';
import Main from "../Main/Main";
import Header from "../Header/Header";
import { Route } from "react-router-dom";
import Movies from "../Movies/Movies";
import Register from "../Register/Register";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import React from "react";
import ProtectedRoute from "../ProtectedRoute"
import MainApi from "../../utils/MainApi"
import{useHistory} from 'react-router-dom';
import { Redirect } from "react-router-dom";
import {getMovies} from "../../utils/MoviesApi";
import CurrentUserContext from "../../contexts/CurrentUserContext";



function App() {
  const [loggedIn, setState] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const history = useHistory();
React.useEffect(() => {
    if (loggedIn === true) {
      if (localStorage.getItem('movies')) {
        setMovies(JSON.parse(localStorage.getItem('movies')));
        saveMovies()
      }
      if (localStorage.getItem('saved-movies')) {
        saveMovies()
      }
    } else {
      checkAuthorize();
    }
  }, [loggedIn]);
  function checkAuthorize() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) { 
      MainApi.getUserData()
      .then((data) => {
        setCurrentUser(data);
        setState(true);
        history.push("/movies");
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
  
  function registerHandler(data) {
    const password = data.password;
    
    MainApi.register(data)
    .then((data) => {
      alert("Вы успешно зарегестрировались")
      const user = { 
        email: data.email,
        password: password
      }
      handleLogin(user)
    })
    .catch((err) => {
      console.log(err)
      alert("Произошла ошибка, попробуйте еще раз!")
    });
  }

  function saveMovies(){
    MainApi
    .getMovies()
    .then((data) => {
      console.log(data)
      const savedArray = data.data.map((item) => {
        const id = item.movieId.toString()
        return { ...item, id: id }
      })
      console.log(savedArray)
      setSavedMovies(savedArray)
    })
  }

  function getMoviesHelper(){
    if(!localStorage.getItem("movies")){
        return getInitMovies()
    } 
      const movies = localStorage.getItem("movies");
      return Promise.resolve(movies);
  }

  function findMovies(string){
    console.log(string)
    getMoviesHelper()
    .then((movies)=>{
      const moviesArray = JSON.parse(movies);
      console.log(moviesArray)
      const filteredMovies = moviesArray.filter((movie) => movie.nameRU.toLowerCase().includes(string.toLowerCase()))
      setMovies(filteredMovies);
    })
}
  
  function getInitMovies() {
    return getMovies()
    .then((data) => {
      localStorage.setItem('movies', JSON.stringify(data))
    })
    .catch((err) => {
      console.log(err)
    });
  }


  function handleLogin({email, password}){
    MainApi.authorize({email, password})
      .then((data) => {
        if(data.token){
          setState(true)
            history.push("/movies")
          }
      })
      .catch(err => {
        console.log(err)
        alert("Произошла ошибка, попробуйте еще раз!")
      });
  }

  function handleEditUser(userData) {
    MainApi.setUserData(userData)
    .then((userData) => {
      setCurrentUser(userData);
    })
    .catch((err) => {
      console.log(err)
    });
  }
  function handleSignOut() {
    localStorage.removeItem('jwt');
    setCurrentUser({isLoggedIn:false});
}

function handleDeleteMovieCard(savedMovieId){
  console.log(savedMovies)
  console.log(savedMovieId)
  const id = savedMovies.find(item => item.id === savedMovieId.toString())._id;
  MainApi.deleteMovies(id)
    .then(() => {
      setSavedMovies(prev => prev.filter(item => item._id !== id));
    })
    .catch((err) => {
        console.log(err)
      },
    )
};
function filterShortFilms(){
  const filteredMovies = movies.filter(movie => movie.duration <= 50)
  console.log(filteredMovies);
  setMovies(filteredMovies);
  return filteredMovies;
}
function unFilterShortFilms(){
  setMovies(JSON.parse(localStorage.getItem('movies')));
}

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Route exact path="*">
            <Redirect to="/" />
        </Route>
        <Route exact path="/">
            <Header />
            <Main />
            <Footer />
          </Route>
          <Route exact path="/signup">
            <Register onRegister={registerHandler} />
          </Route>
          <Route exact path="/signin">
            <Login onLogin={handleLogin} />
          </Route>
            <Route exact path="/movies">
              <ProtectedRoute component={Movies} unFilterFilms={unFilterShortFilms} filterMovies={filterShortFilms} loggedIn={loggedIn} onDelete={handleDeleteMovieCard} onFindMovies={findMovies} savedMovies={savedMovies} saveMovies={saveMovies} movies={movies} redirect="/"/>
            </Route>
            <Route exact path="/saved-movies">
              <ProtectedRoute component={SavedMovies} savedMovies={savedMovies} loggedIn={loggedIn} movies={savedMovies} saveMovies={saveMovies} onDelete={handleDeleteMovieCard} redirect="/"/>
            </Route>
            <Route exact path="/profile">
              <ProtectedRoute component={Profile} onSignOut={handleSignOut} onUpdateProfile={handleEditUser} loggedIn={loggedIn} redirect="/" />
            </Route>
          </div>
        </CurrentUserContext.Provider>
  );
}

export default App;
