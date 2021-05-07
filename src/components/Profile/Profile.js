import "./Profile.css";
import { Link } from "react-router-dom";
import ProtectedHeader from "../ProtectedHeader/ProtectedHeader";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import React from "react";
import useFormWithValidation from "../../utils/Validation/Validator"

function Profile({onSignOut, onUpdateProfile}) {
const currentUser = React.useContext(CurrentUserContext)
React.useEffect(() =>{
    console.log(currentUser)
})  

const {
    values, handleChange, errors, isValid
  } = useFormWithValidation()

  function handleEditProfile(){ 
      console.log(currentUser)
      console.log(values)
        onUpdateProfile(values)
      
  }
    return (
    <div className ="profile">
        <ProtectedHeader />
        <p className="profile__welcome">Привет, {currentUser.name}!</p>
        <form>
            <div className="profile__info">
                <div className="profile__name">
                    <p className="profile__name-caption">Имя</p>
                    <input className="profile__name-name" name="name" type="text" onChange={handleChange} required defaultValue={currentUser.name} />
                </div>
                <span className={!errors.name ? "profile__input-error" : "profile__input-error_open"}>{errors.name}</span>
                <div className="profile__container-line" />
                <div className="profile__name">
                    <p className="profile__name-caption">E-mail</p>
                    <input className="profile__name-name" name="email" type="email" onChange={handleChange} required defaultValue={currentUser.email} />
                    </div>
                <span className={!errors.email ? "profile__input-error" : "profile__input-error_open"}>{errors.email}</span>
            </div>
            <div className="profile__button-container">
                <Link to="#">
                    <button className={isValid ? "profile__button-container__button" : "profile__button-container__button_disabled"} disabled={!isValid} type="button" onClick={handleEditProfile}> 
                        Редактировать
                    </button>
                </Link>
                <Link to="/">
                    <button className="profile__button-container__button profile__button-container__button_exit" onClick={onSignOut}> 
                        Выйти из аккаунта
                    </button>
                </Link>
            </div>
        </form>
    </div>
    
        );
    }
    
    export default Profile;