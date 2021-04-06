import "./Profile.css";
import { Link } from "react-router-dom";
import ProtectedHeader from "../ProtectedHeader/ProtectedHeader";

function Profile() {

    return (
    <div className ="profile">
        <ProtectedHeader />
        <p className="profile__welcome">Привет, Виталий!</p>
        <div className="profile__info">
            <div className="profile__name">
                <p className="profile__name-caption">Имя</p>
                <p className="profile__name-name">Виталий</p>
            </div>
            <div className="profile__container-line" />
            <div className="profile__name">
                <p className="profile__name-caption">E-mail</p>
                <p className="profile__name-name">pochta@yandex.ru</p>
            </div>
        </div>
        <div className="profile__button-container">
            <Link to="#">
                <button className="profile__button-container__button"> 
                    Редактировать
                </button>
            </Link>
            <Link to="/">
                <button className="profile__button-container__button profile__button-container__button_exit"> 
                    Выйти из аккаунта
                </button>
            </Link>
        </div>
    </div>
    
        );
    }
    
    export default Profile;