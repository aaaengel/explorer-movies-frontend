import "./Register.css";
import logo from "../../images/MainLogo.svg";
import { Link } from "react-router-dom";
import React from "react";
import useFormWithValidation from "../../utils/Validation/Validator"

function Register({onRegister}) {
  
  const {
    values, handleChange, errors, isValid, resetForm
  } = useFormWithValidation()

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(values);
    resetForm()
  };

    return (
      <div className="register">
          <div className="register__header">
              <div className="register__header__logo-and-welcome-container">
                <img className="register__header__logo" src={logo} alt="logo" />
                <p className="register__header__welcome">Добро пожаловать!</p>
              </div>
          </div>
          <form className="register__form" onSubmit={handleSubmit} >
              <div className="register__input-container">
                    <label className="register__input__label">Имя</label>
                    <input name="name" className="register__input" type="text" required onChange={handleChange} />
                    <span className={!errors.name ? "register__input-error" : "register__input-error_open"}>{errors.name}</span>
              </div>
              <div className="register__input-container" >
                    <label className="register__input__label">E-mail</label>
                    <input name="email" className="register__input" type="email" required onChange={handleChange} />
                    <span className={!errors.email ? "register__input-error" : "register__input-error_open"}>{errors.email}</span>
              </div>
              <div className="register__input-container" typeof="text">
                    <label className="register__input__label" >Пароль</label>
                    <input name="password" className="register__input" type="password" required onChange={handleChange} />
                    <span className={!errors.password ? "register__input-error" : "register__input-error_open"}>{errors.password}</span>
              </div>
              <button className={isValid ? "register__button" : "register__button_disabled"} disabled={!isValid}>
                        <p className="register__button-text" onSubmit={handleSubmit}>Зарегистрироваться</p>
              </button>
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
  