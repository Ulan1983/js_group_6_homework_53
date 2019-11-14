import React, { Component } from 'react';
import './App.css';

import AddTaskForm from './Components/AddTaskForm/AddTaskForm';
import Task from './Components/Task/Task';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <AddTaskForm />
        <Task />
      </div>
    );
  }

}

export default App;
