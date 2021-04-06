import logo from "../../images/registerLogo.svg";
import "./ProtectedHeader.css";
import { Link } from "react-router-dom";
import accLogo from "../../images/accLogo.png";
import menuLogo from "../../images/MenuIcon.svg";

function ProtectedHeader(){

    return(
        <div className="protected-header">
            <img className="protected-header__image" src={logo} alt="logo" />
            <div className="protected-header__navigation">
                <Link to="/movies">
                    <button className="protected-header__link">Фильмы</button>
                </Link>
                <Link to="/saved-movies">
                    <button className="protected-header__link protected-header__link_saved-films">Сохраненные фильмы</button>
                </Link>
                <Link to="/profile">
                    <button className="protected-header__link protected-header__link_account">Аккаунт</button>
                </Link>
                <img src={menuLogo} className="protected-header__menu-logo" />
                <div>

                </div>
                <Link to="/profile">
                    <img src={accLogo} className="protected-header__account-icon" alt="acc-logo" />
                </Link>
            </div>
        </div>
    )
}


export default ProtectedHeader;