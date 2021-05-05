import "./Profile.css";
import { Link } from "react-router-dom";
import ProtectedHeader from "../ProtectedHeader/ProtectedHeader";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import React from "react";

function Profile({onSignOut, onUpdateProfile}) {
const currentUser = React.useContext(CurrentUserContext)
const [userData, setUserData] = React.useState(currentUser)
React.useEffect(() =>{
    console.log(currentUser)
})  


const handleChange = (e) => {
    const {name, value} = e.target;
    setUserData({
      ...userData,  
      [name]: value,
    });
    console.log(userData)
  }

  function handleEditProfile(){ 
      console.log(currentUser)
      console.log(userData)
        onUpdateProfile(userData)
      
  }
    return (
    <div className ="profile">
        <ProtectedHeader />
        <p className="profile__welcome">Привет, {currentUser.name}!</p>
        <div className="profile__info">
            <div className="profile__name">
                <p className="profile__name-caption">Имя</p>
                <input className="profile__name-name" name="name" onChange={handleChange} defaultValue={currentUser.name} />
            </div>
            <div className="profile__container-line" />
            <div className="profile__name">
                <p className="profile__name-caption">E-mail</p>
                <input className="profile__name-name" name="email" onChange={handleChange} defaultValue={currentUser.email} />
            </div>
        </div>
        <div className="profile__button-container">
            <Link to="#">
                <button className="profile__button-container__button" type="button" onClick={handleEditProfile}> 
                    Редактировать
                </button>
            </Link>
            <Link to="/">
                <button className="profile__button-container__button profile__button-container__button_exit" onClick={onSignOut}> 
                    Выйти из аккаунта
                </button>
            </Link>
        </div>
    </div>
    
        );
    }
    
    export default Profile;