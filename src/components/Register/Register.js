import "./Register.css";
import logo from "../../images/registerLogo.svg";
import { Link } from "react-router-dom";

function Register() {
    return (
      <div className="register">
          <div className="register__header">
              <div className="register__header__logo-and-welcome-container">
                <img className="register__header__logo" src={logo} alt="logo" />
                <p className="register__header__welcome">Добро пожаловать!</p>
              </div>
          </div>
          <form className="register__form">
              <div className="register__input-container">
                    <label className="register__input__label" >Имя</label>
                    <input className="register__input" type="text" required />
                    <span className="register__input-error"></span>
              </div>
              <div className="register__input-container" >
                    <label className="register__input__label">E-mail</label>
                    <input className="register__input" type="email" required />
                    <span className="register__input-error"></span>
              </div>
              <div className="register__input-container" typeof="text">
                    <label className="register__input__label" >Пароль</label>
                    <input className="register__input" type="password" required />
                    <span className="register__input-error"></span>
              </div>
              <Link to="/signin" className="register__underbutton-link-container">
                    <button className="register__button">
                        <p className="register__button-text">Зарегистрироваться</p>
                    </button>
              </Link>
              <div className="register__underbutton">
                <p className="register__underbutton-text">Уже зарегистрированы?</p>
                <Link to="/signin" className="register__underbutton-link-container">
                    <button className="register__underbutton-link">Войти</button>
                </Link>
              </div>
          </form>
      </div>
    );
  }
  
  export default Register;
  