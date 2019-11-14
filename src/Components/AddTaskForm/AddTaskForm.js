import React from 'react';
import './AddTaskForm.css';

const AddTaskForm = props => {
    return (
        <div className='divTaskForm'>
            <form onSubmit={props.addTask}>
                <input type='text' className='inputTaskForm' onChange={props.onChange} />
                <button className='btnTaskForm' type='submit'>Add</button>
            </form>
        </div>
    )
}

export default AddTaskForm;