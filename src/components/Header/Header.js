import "./Header.css";
import headerLogo from "../../images/HeaderLogo.png";
import { Link } from "react-router-dom";

function Header() {
    
    return (
        <div className = "header">
            <div className="header__content-container">
            <Link to="/" >
                <img className="header__image" src = {headerLogo} alt="logo" />
            </Link>
            <div className="header__button-container">
                <Link to="/signup" >
                    <button className="header__button header__button_register">
                        <p className="header__button-text">Регистрация</p>
                    </ button>
                </Link>
                <Link to="/signin" >
                    <button className="header__button header__button_auth">
                        <p className="header__button-text">Войти</p>
                    </button>
                </Link>
            </div>
            </div>
        </div>
            );
}

export default Header;