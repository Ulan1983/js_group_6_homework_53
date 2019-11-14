import React from 'react';
import './AddTaskForm.css';

const AddTaskForm = props => {
    return (
        <div className='divTaskForm'>
            <form className='formTaskForm'>
                <input type='text' className='inputTaskForm' onChange={props.onChange} />
                <button className='btnTaskForm' type='submit' onClick={props.onClick}>Add</button>
            </form>
        </div>
    )
}

export default AddTaskForm;