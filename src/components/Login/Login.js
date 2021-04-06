import "./Login.css";
import logo from "../../images/registerLogo.svg";
import { Link } from "react-router-dom";

function Login() {
    return (
      <div className="login">
          <div className="login__header">
              <div className="login__header__logo-and-welcome-container">
                <img className="login__header__logo" src={logo} alt="logo" />
                <p className="login__header__welcome">Рады видеть!</p>
              </div>
          </div>
          <form className="login__form">
              <div className="login__input-container">
                    <label className="login__input__label" >E-mail</label>
                    <input className="login__input" type="text" required />
                    <span className="login__input-error"></span>
              </div>
              <div className="login__input-container" typeof="text">
                    <label className="login__input__label">Пароль</label>
                    <input className="login__input" type="password" required />
                    <span className="login__input-error"></span>
              </div>
              <Link to="/profile">
                <button className="login__button">
                        <p className="login__button-text">Войти</p>
                </button>
              </Link>
              <div className="login__underbutton">
                <p className="login__underbutton-text">Ещё не зарегистрированы?</p>
                <Link to="/signup" className="login__underbutton-link-container">
                    <button className="login__underbutton-link">Регистрация</button>
                </Link>
              </div>
          </form>
      </div>
    );
  }
  
  export default Login;