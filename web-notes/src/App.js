import './styles/App.css';
import React from "react";
import { Route, Routes } from 'react-router-dom';
import Authorization from "./components/authorization";
import TasksPage from './components/tasksPage';
import HotTasks from './components/hottasks';
import Hidden from './components/hidden';
import Notes from './components/notes';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Authorization />} />
        <Route path='/tasks' element={<TasksPage />} />
        <Route path='/hot' element={<HotTasks />} />
        <Route path='/hidden' element={<Hidden />} />
        <Route path='/notes' element={<Notes />} />
      </Routes>
    </div>
  );
}

export default App;
