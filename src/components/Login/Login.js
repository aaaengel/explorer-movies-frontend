import "./Login.css";
import logo from "../../images/MainLogo.svg";
import { Link } from "react-router-dom";
import React from "react";
import useFormWithValidation from "../../utils/Validation/Validator";

function Login({onLogin}) {
const {
  values, handleChange, errors, isValid, resetForm
} = useFormWithValidation()

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values);
    resetForm()
  };

    return (
      <div className="login">
          <div className="login__header">
              <div className="login__header__logo-and-welcome-container">
                <img className="login__header__logo" src={logo} alt="logo" />
                <p className="login__header__welcome">Рады видеть!</p>
              </div>
          </div>
          <form className="login__form" onSubmit={handleSubmit}>
              <div className="login__input-container">
                    <label className="login__input__label" >E-mail</label>
                    <input className="login__input" type="email" required name="email" onChange={handleChange} />
                    <span className={!errors.email ? "login__input-error" : "login__input-error_open"}>{errors.email}</span>
              </div>
              <div className="login__input-container" typeof="text">
                    <label className="login__input__label">Пароль</label>
                    <input name="password" className="login__input" type="password" required onChange={handleChange} />
                    <span className={!errors.password ? "register__input-error" : "register__input-error_open"}>{errors.password}</span>
              </div>
             <button className={isValid ? "login__button" : "login__button_disabled"}>
                <p className="login__button-text" onSubmit={handleSubmit}>Войти</p>
            </button>
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