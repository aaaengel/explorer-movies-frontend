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
  const [token, setToken] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState({});
  const [message, setMessage] = React.useState('');
  const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = React.useState(false);
  const [initialization, setInitialization] = React.useState(false);
  const [isInformPopupOpen, setInformPopupOpen] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [initMovies, setInitMovies] = React.useState(false);
  const [initSavedMovies, setInitSavedMovies] = React.useState(false);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const history = useHistory();

  function checkAuthorize() {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {    
      setToken(jwt);
      MainApi.getUserData()
      .then((data) => {
        setCurrentUser(data);
        setState(true);
        history.push("/profile");
      })
      .catch((err) => {
        setMessage(err);
        setInfoTooltipPopupOpen(true);
      })
      .finally(() => {
        setInitialization(true);
      })
    } else {
      setInformPopupOpen(true);
      setInitialization(true);
    }
  }

  React.useEffect(() => {
    if (loggedIn === true) {
      if (localStorage.getItem('movies')) {
        setMovies(JSON.parse(localStorage.getItem('movies')));
        setInitMovies(!initMovies);
        saveMovies()
      }
      if (localStorage.getItem('saved-movies')) {
        saveMovies()
      }
    } else {
      checkAuthorize();
    }
  }, [loggedIn]);
  
  function registerHandler(data) {
    const password = data.password;
    MainApi.register(data)
    .then((data) => {
      const user = { 
        email: data.email,
        password: password
      }
      handleLogin(user)
    })
    .catch((err) => {
      setMessage(err);
      setInfoTooltipPopupOpen(true);
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
            history.push("/profile")
          }
      })
      .catch(err => console.log(err));
  }

  function handleEditUser(userData) {
    MainApi.setUserData(userData)
    .then((userData) => {
      setCurrentUser(userData);
      setMessage('Профиль успешно изменен!');
      setInfoTooltipPopupOpen(true);
    })
    .catch((err) => {
      setMessage(err);
      setInfoTooltipPopupOpen(true);
    });
  }
  function handleSignOut() {
    localStorage.removeItem('jwt');
    setCurrentUser({isLoggedIn:false});
}

function handleDeleteMovieCard(savedMovieId){
  console.log(savedMovies)
  console.log(savedMovieId)
  const id = savedMovies.find(item => item.id === savedMovieId)._id;
  MainApi.deleteMovies(id)
    .then(() => {
      setSavedMovies(prev => prev.filter(item => item._id !== id));
    })
    .catch((err) => {
        history.push("/error");
      },
    )
};

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
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
              <ProtectedRoute component={Movies} loggedIn={loggedIn} onDelete={handleDeleteMovieCard} onFindMovies={findMovies} savedMovies={savedMovies} saveMovies={saveMovies} movies={movies} redirect="/"/>
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
