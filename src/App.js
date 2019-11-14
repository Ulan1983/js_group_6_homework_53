import React, { Component } from 'react';
import nanoid from 'nanoid';

import AddTaskForm from './Components/AddTaskForm/AddTaskForm';
import Task from './Components/Task/Task';

class App extends Component {
  state = {
    tasks: [
      { id: nanoid(), text: 'Buy products' },
      { id: nanoid(), text: 'Play with daughter' }
    ],

    newTask: ''
  };

  createNewTask = event => {
    this.setState({ newTask: event.target.value });
  };

  addTask = () => {
    const tasks = [...this.state.tasks];
    const task = { id: nanoid(), text: this.state.newTask };
    tasks.push(task);
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
        <div className='container'>
          <AddTaskForm
            onChange={this.createNewTask}
            addTask={() => this.addTask(this.state.newTask)}
          />
          {this.state.tasks.map((task) => (
            <Task
              key={task.id}
              text={task.text}
              onRemove={() => this.removeTask(task.id)}
            />
          ))}

        </div>
      </div>
    );
  }

}

export default App;
