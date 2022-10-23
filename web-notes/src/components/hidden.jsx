import '../styles/tasksPage.css';
import React, { useState } from "react";
import Task from './task';
import search from "../img/search.svg";
import Menu from './menu';


function Hidden() {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <div className="wrapper-tasks">
      <div className="container-space"></div>

      <div className='container-tasks'>
          <h1>скрытые задачи</h1>
          <div className="search-container">
            <img src={search} alt="" id='search-img'/>
            <form action="">
              <input type="search" placeholder='Поиск' className='search-item'/>
            </form>
          </div>
          <Task title={'1'}/>
          <Task title={'2'}/>
          <Task title={'3'}/>
      </div>

      <Menu active={menuActive} setActive={setMenuActive}/>

    </div>
  );
}

export default Hidden;