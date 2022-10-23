import '../styles/tasksPage.css';
import React, { useState } from "react";
import Task from './task';
import search from "../img/search.svg";
import Menu from './menu';


function Notes() {
  
  
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className="wrapper-tasks">
      <div className="container-space"></div>

      <div className='container-tasks'>
          <h1>Заметки</h1>
          <div className="notes-container">
            <textarea></textarea>
          </div>
      </div>

      <Menu active={menuActive} setActive={setMenuActive}/>

    </div>
  );
}

export default Notes;