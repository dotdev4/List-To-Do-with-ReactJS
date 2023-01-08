import React from 'react';
import Button from '../Button/Button';
import "./Btn_DeleteAll.css";

const BtnDeleteAll = ({ handDeleteAllTasks}) => {
    return(
        <div className='btn-delete-container'>
            <Button onClick={handDeleteAllTasks}>Delete All</Button>
        </div>
    );
};

export default BtnDeleteAll;