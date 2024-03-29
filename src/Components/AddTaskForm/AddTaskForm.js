import React from 'react';
import './AddTaskForm.css';

const AddTaskForm = props => {
    return (
        <div className='divTaskForm'>
            <form onSubmit={props.onSubmit}>
                <input type='text' className='inputTaskForm' value={props.text} onChange={props.onChange} placeholder='Create task' />
                <button className='btnTaskForm' type='submit'>Add</button>
            </form>
        </div>
    )
}

export default AddTaskForm;