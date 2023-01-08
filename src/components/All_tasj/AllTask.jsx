import React from 'react';
import Task from '../Task/Task';

const Tasks = ({ tasks, handleTaskClick, handleTaskDeletion}) => {
   return(
    <>
    {tasks.map((tasks)=>(
        <Task
        task={tasks}
        key={tasks.id}
        handleTaskClick={handleTaskClick}
        handleTaskDeletion={handleTaskDeletion}
        />
    ))}
    </>
   );
};

export default Tasks;