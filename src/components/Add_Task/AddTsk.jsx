import React, { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import Button from '../Button/Button';
import "./AddTask.css";
const AddTask = ({ handleTaskAddition }) => {
    // valor del titulo
    const [inputData, setInputData] = useState('');
    // valor de la descripcion
    const [inputDescription, setInputDescription] = useState('');
    // si el modal aprarece o no
    const [isShowing, setShow] = useState(false);

    // Captura el valor del input titulo
    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    // Captura el input de la descripcion
    const handleDescriptionChange = (e) => {
        setInputDescription(e.target.value);
    };

    // agregar tarea
    const handleAddTaskClick = () => {
        handleTaskAddition(inputData, inputDescription);
        // limpiar inputs
        setInputData('');
        setInputDescription('');
    };

    return (
        <>
            <div className='add-task-container'>
                <Button onClick={() => {
                    setShow(true);
                }}>Add New Task</Button>
            </div>
            <div className='modal'
                style={isShowing ? 
                {
                    display: 'flex',
                }
                : {
                    display: 'none',
                }
                }
                onClick={(e) => (e.target.className === 'modal' ? setShow(false): {})}
                >
                <div className='input-add-container'>
                <GrClose 
                onClick={() =>{
                    setShow(false);
                }}
                />
                <input type="text"
                value={inputData}
                placeholder='Title of the task'
                onChange={handleInputChange}
                />
                <textarea type="text"
                value={inputDescription}
                cols='30'
                rows='10'
                placeholder='Description of the task'
                maxLength='250'
                onChange={handleDescriptionChange}></textarea>
                <Button
                onClick={() =>{
                    if (inputData !== '') {
                        handleAddTaskClick();
                        setShow(false);
                    }
                }} 
                >Add</Button>
                </div>
            </div>
        </>
    );
};

export default AddTask;