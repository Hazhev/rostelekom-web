import React from "react";
import { useNavigate } from "react-router-dom"
import '../styles/authorization.css';
import logo from "../img/logo.svg";
import user from "../img/user.svg";
import phone from "../img/phone.svg";
import mail from "../img/mail.svg";

const Authorization = () => {
    const navigate = useNavigate();
    return(
        <div className="wrapper-app">
            <div className="container-app">
                <div className="container-app__gradient">
                    <img className="container-app__logo-img" src={logo} alt="" />

                    <div className="container-app__form">
                        <img src={user} className='input-img'/>
                        <input placeholder='Имя' name =''></input>
                    </div>

                    <div className="container-app__form">
                        <img src={user} className='input-img'/>
                        <input placeholder='Фамилия' name =''></input>
                    </div>

                    <div className="container-app__form">
                        <img src={user} className='input-img'/>
                        <input placeholder='Отчество' name =''></input>
                    </div>

                    <div className="container-app__form">
                        <img src={mail} className='input-img'/>
                        <input placeholder='Почта' name =''></input>
                    </div>

                    <div className="container-app__form">
                        <img src={phone} className='input-img'/>
                        <input placeholder='Номер телефона' name =''></input>
                    </div>

                    <button className="container-app__button" onClick={() => navigate("/tasks")}>ВОЙТИ</button>
                </div>
                <div className="container-app__text">*Нажимая на кнопку, вы даете согласие на оброботку персональных данных и соглашетесь с политикой конфиденциальности</div>
            </div>
        </div>
    )
}

export default Authorization;