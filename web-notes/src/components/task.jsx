import '../styles/task.css';
import React, {useState} from "react";
import clock from "../img/clock.svg";
import calendar from "../img/calendar.svg";
import arrow from "../img/arrow.svg";


function Task(props) {
    const [show,setShow] = useState(false)
  return (

    <div className="task-container">
        <div className="task-container__box">
            <input type = "checkbox" className='checbox-item'/>
            <div className="task-container__checkbox" onClick={()=> setShow(!show)}>
                <div className="task-container__task-name">Задание {props.title}</div>
                <img src={arrow} alt="" className={show ? '' : 'arrow-rotated'}/>
            </div>
        </div>

        {show &&  
        <>
            <div className="task-container__deadline">
                <div className="deadline__text">
                    <div className='deadline__container'>
                        <img src={clock} alt="" />
                        <div className="time__text">Время:</div>
                    </div>
                    <div className="time__clock">18:00</div>
                </div>
                <div className="deadline__text">
                    <div className='deadline__container'>
                        <img src={calendar} alt="" />
                        <div className="time__text">Дата:</div>
                    </div>
                    <div className="time__clock">23.10.2022</div>
                </div>
            </div> 
            <div className="task-container__comment">
                <div className="time__text comm">Комментарии:</div>
                <textarea></textarea>
            </div>
        </>
        }
    </div>

  );
}

export default Task;