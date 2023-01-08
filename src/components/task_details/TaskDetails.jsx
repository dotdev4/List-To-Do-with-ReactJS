import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import "./TaskDetails.css";

const TaskDetails = () => {
    const params = useParams();
    const navigate = useNavigate();
    let allTask = JSON.parse(localStorage.getItem('tasks'));


    // VOLVER AL MENE PRINCIPAL
    const handleBackButtonClick = () => {
        navigate('/');
    }

    //  CAPTURAR E; TITULO Y LA DESCRICION DE LA TAREA
    let taskTitle;
    let taskDescription;
    allTask.map((element) => {
        if(element.id === params.taskId){
            return(
                (taskTitle = element.title), ( taskDescription = element.description)
            );
        }
    });

    return(
        <>
            <div className='back-btn-container'>
                <Button onClick={handleBackButtonClick}>Back</Button>
            </div>
            <div className='task-details-container'>
                <h2>{taskTitle}</h2>
                <p>{taskDescription !== '' ? taskDescription : 'Description null'}</p>

            </div>
        </>
    );

};

export default TaskDetails;