import React from 'react';
import './Task.css';

const Task = props => {
    return (
        <div className='divTask'>
            <p className='textId'>{props.key}</p>
            <p className='textTask'>{props.text}</p>
            <i className='far fa-trash-alt' onClick={props.onRemove} style={{ fontSize: '25px', color: 'red', paddingTop: '7px', paddingRight: '10px', cursor: 'pointer' }} />
        </div>
    )
}

export default Task;