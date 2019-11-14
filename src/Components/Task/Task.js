import React from 'react';
import './Task.css';

const Task = props => {
    return (
        <div className='divTask'>
            <div className='textTask'>text</div>
            <button className='btnTask' type='submit' onClick={props.onClick}>Delete</button>
        </div>
    )
}

export default Task;