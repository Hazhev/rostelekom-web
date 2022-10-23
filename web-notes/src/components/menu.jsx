import '../styles/tasksPage.css';
import React from "react";
import { Link } from "react-router-dom";
import unordered from "../img/List_Unordered.svg";
import checklist from "../img/List_Checklist.svg";
import window from "../img/Window.svg";
import warning from "../img/Wavy_Warning.svg";
import settings from "../img/Settings.svg";
import arrowW from "../img/arroww.svg";
import telegram from "../img/telegram.svg";
import swicht from "../img/swicht.svg";

function Menu({active, setActive}) {
    
    return (
        <>
            <div className={active ? "wrapper-menu active" : "wrapper-menu"} onClick={() => setActive(!active)}>
            
                <div className="container-menu">
                <Link 
                to={'/tasks'}
                onClick={() => setActive(!active)}>
                <div className="container-menu__box">
                    <h1>Список задач</h1>
                    <img src={unordered} alt="" />
                </div>
                </Link>

                <Link 
                to={'/hot'}
                onClick={() => setActive(!active)}>
                <div className="container-menu__box">
                    <h1>Горящие задачи</h1>
                    <img src={warning} alt="" />
                </div>
                </Link>

                <Link 
                to={'/hidden'}
                onClick={() => setActive(!active)}>
                <div className="container-menu__box">
                    <h1>Скрытые задачи</h1>
                    <img src={checklist} alt="" />
                </div>
                </Link>

                <Link 
                to={'/notes'}
                onClick={() => setActive(!active)}>
                <div className="container-menu__box">
                    <h1>Заметки</h1>
                    <img src={window} alt="" />
                </div>
                </Link>

                <div className="container-menu__box set" >
                    <h1>Настройки</h1>
                    <img src={settings} alt="" />
                </div>

                <div className={active ? "container-menu__box-setting active" : "container-menu__box-setting"}>
                    <div className="settings-container">
                        <img src={arrowW} alt="" />
                        <div className="settings-text">Уведомления</div>
                        <img src={telegram} alt="" />
                    </div>

                    <div className="settings-container">
                        <img src={arrowW} alt="" />
                        <div className="settings-text">Темная тема</div>
                        <img src={swicht} alt="" />
                    </div>
                </div>

                </div>
            </div>

        </>
    );
}

export default Menu;