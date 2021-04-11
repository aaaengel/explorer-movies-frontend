import logo from "../../images/MainLogo.svg";
import "./ProtectedHeader.css";
import { Link } from "react-router-dom";
import accLogo from "../../images/accountLogo.svg";
import menuLogo from "../../images/MenuIcon.svg";

function ProtectedHeader(){

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
                <img src={menuLogo} className="protected-header__menu-logo" />
            </div>
        </div>
    )
}


export default ProtectedHeader;