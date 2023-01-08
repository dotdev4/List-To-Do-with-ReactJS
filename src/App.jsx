import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import TaskDetails from './components/task_details/TaskDetails';
import Tasks from './components/All_tasj/AllTask';
import AddTask from './components/Add_Task/AddTsk';
import Header from './components/header/Header';
import BtnDeleteAll from './components/Btn_Delete/Btn_DeleteAll';

function App() {
   // Pegar as tasks do localStorage
   let allTasks = JSON.parse(localStorage.getItem('tasks'));

   const verificationTasks = () => {
     if (allTasks === null) {
       return [];
     } else {
       return allTasks;
     }
   };
 
   const [tasks, setTasks] = useState(verificationTasks());
 
   // Atualizar o localStorage
   useEffect(() => {
     localStorage.setItem("tasks", JSON.stringify(tasks));
   }, [tasks]);
 
   // Adicionar uma nova task
   const handleTaskAddition = (taskTitle, taskDescription) => {
     const newTasks = [
       ...tasks,
       {
         title: taskTitle,
         id: uuidv4(),
         completed: false,
         description: taskDescription,
       },
     ];
     setTasks(newTasks);
   };
 
   // Adicionar/retirar status de task concluida
   const handleTaskClick = (taskId) => {
     const newTasks = tasks.map((task) => {
       if (task.id === taskId)
         return {
           ...task,
           completed: !task.completed,
         };
       return task;
     });
     setTasks(newTasks);
   };
 
   // Deletar task
   const handleTaskDeletion = (taskId) => {
     const newTasks = tasks.filter((task) => task.id !== taskId);
     setTasks(newTasks);
   };
 
   // Deletar todas task
   const handDeleteAllTasks = () => {
     setTasks([]);
   };

  return (
    <Router>
      <Header />
      <div className='container'>
        <AddTask handleTaskAddition={handleTaskAddition} />
        <BtnDeleteAll handDeleteAllTasks={handDeleteAllTasks} />
        <Routes>
          <Route
            path='/'
            exact
            element={<Tasks tasks={tasks}
            handleTaskClick={handleTaskClick}
            handleTaskDeletion={handleTaskDeletion}
          />}
          />
          <Route path='/:taskId' exact element={<TaskDetails/>} />
        </Routes>
      </div>

    </Router >
  );
};

export default App
