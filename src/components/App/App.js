import './App.css';
import Main from "../Main/Main";
import Header from "../Header/Header";
import { Route } from "react-router-dom";
import Movies from "../Movies/Movies";
import Register from "../Register/Register";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies"


function App() {
  return (
    <div className="app">
       <Route exact path="/">
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route exact path="/signup">
          <Register />
        </Route>
        <Route exact path="/signin">
          <Login />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route path="/movies">
          <Movies />
          <Footer />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies />
          <Footer />
        </Route>
    </div>
  );
}

export default App;
