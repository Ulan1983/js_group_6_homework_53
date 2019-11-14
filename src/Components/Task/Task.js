import React from 'react';
import './Task.css';

const Task = props => {
    return (
        <div className='divTask'>
            <p className='textId'>{props.key}</p>
            <p className='textTask'>{props.text}</p>
            <button className='btnTask' type='submit' onClick={props.onRemove}>Delete</button>
        </div>
    )
}

export default Task;