import React, { Component } from 'react';
import nanoid from 'nanoid';

import AddTaskForm from './Components/AddTaskForm/AddTaskForm';
import Task from './Components/Task/Task';

class App extends Component {
  state = {
    tasks: [
      { id: nanoid(), text: 'Buy products' },
      { id: nanoid(), text: 'Play with daughter' },
      { id: nanoid(), text: 'Do exercises' },
      { id: nanoid(), text: 'Pay bill for electricity' },
    ],

    newTask: ''
  };

  createNewTask = event => {
    this.setState({ newTask: event.target.value });
  };

  addTask = event => {
    event.preventDefault();
    const tasks = [...this.state.tasks];
    tasks.push({ id: nanoid(), text: this.state.newTask });
    this.setState({ tasks })
  };

  removeTask = id => {
    const index = this.state.tasks.findIndex(task => task.id === id);
    const tasks = [...this.state.tasks];
    tasks.splice(index, 1);
    this.setState({ tasks });
  };

  render() {
    return (
      <div className="App" >
        <AddTaskForm
          onChange={this.createNewTask}
          onSubmit={this.addTask}
          text={this.state.newTask}
        />
        {this.state.tasks.map((task) => (
          <Task
            key={task.id}
            text={task.text}
            onRemove={() => this.removeTask(task.id)}
          />
        ))}
      </div>
    );
  }

}

export default App;
