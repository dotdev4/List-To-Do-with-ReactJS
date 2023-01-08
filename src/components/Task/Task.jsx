import React from 'react';
import { BiTrash, BiInfoCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import "./Task.css";


const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
    const navigate = useNavigate();
  
    // Adiciona o Id da task na url para depois ser capturado.
    const handleTaskDetailsClick = () => {
      navigate(`/${task.id}`);
      console.log(task.id);
    };
  
    return (
      <div
        className="task-container"
        style={
          task.completed ? {
                borderLeft: "6px solid #4eb1b8",
                textDecoration: "line-through",
              }
            : {}
        }
      >
        <p
          className="task-title"
          onClick={() => {
            handleTaskClick(task.id);
          }}
        >
          {task.title}
        </p>
        <div className="button-container">
          <button className="task-details-btn" onClick={handleTaskDetailsClick}>
            <BiInfoCircle title="Detalhes" />
          </button>
          <button
            className="remove-task-btn"
            onClick={() => {
              handleTaskDeletion(task.id);
            }}
          >
            <BiTrash title="Remover" />
          </button>
        </div>
      </div>
    );
  };
  

export default Task;
