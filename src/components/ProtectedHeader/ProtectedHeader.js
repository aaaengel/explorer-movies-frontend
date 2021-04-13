import logo from "../../images/MainLogo.svg";
import "./ProtectedHeader.css";
import { Link } from "react-router-dom";
import accLogo from "../../images/accountLogo.svg";
import menuLogo from "../../images/BurgerLogo.svg";
import closeIcon from "../../images/CloseIcon.svg"
import  React from "react";

function ProtectedHeader(){
    const [burgerOpened, setBurgerOpened] = React.useState(false);
    function openBurger(){
        if(burgerOpened === false){
            setBurgerOpened(true);
        }
    }

    function closeBurger(){
        if(burgerOpened === true){
            setBurgerOpened(false);
        }
    }

    return(
        <div className="protected-header">
            <img className="protected-header__image" src={logo} alt="logo" />
            <div className="protected-header__navigation">
                <Link to="/movies">
                    <button className="protected-header__link protected-header__link_films">Фильмы</button>
                </Link>
                <Link to="/saved-movies">
                    <button className="protected-header__link protected-header__link_saved-films protected-header__link_films">Сохраненные фильмы</button>
                </Link>
                <div class="protected-header__profile-link">
                    <Link to="/profile">
                        <img src={accLogo} className="protected-header__account-icon" alt="acc-logo" />
                    </Link>
                    <Link to="/profile">
                        <button className="protected-header__link protected-header__link_account">Аккаунт</button>
                    </Link>
                </div>
                <button className="protected-header__burger-button" onClick={openBurger}>
                    <img src={menuLogo} className="protected-header__menu-logo" alt="menu" />
                </button>
            </div>
                <div className={burgerOpened ?  "protected-header_burger_opened" : "protected-header_burger"}>
                    <button className="protected-header__close-button">
                        <img src={closeIcon} alt="closebtn" onClick={closeBurger} />
                    </button>
                    <div className="protected-header__navigation_burger__overlay" />
                    <div className="protected-header__navigation_burger">
                        <div className="protected-header__navigation__main-links_burger"> 
                            <Link to="/">
                                <button className="protected-header__link_burger protected-header__link_burger_main-links">Главная</button>
                            </Link>
                            <Link to="/movies">
                                <button className="protected-header__link_burger protected-header__link_burger_main-links">Фильмы</button>
                            </Link>
                            <Link to="/saved-movies">
                                <button className="protected-header__link_burger protected-header__link_burger_main-links">Сохраненные фильмы</button>
                            </Link> 
                        </div>
                        <div class="protected-header__profile-link_burger protected-header__profile-link_burger">
                            <Link to="/profile">
                                <button className="protected-header__link_burger protected-header__link_account_burger">Аккаунт</button>
                            </Link>
                        </div>
                    </div>
                </div>
        </div>
    )
}


export default ProtectedHeader;