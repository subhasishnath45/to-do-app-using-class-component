import React, { Component } from 'react';
import Navbar from './components/Navbar';
import TodoRows from './components/TodoRows';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: 'Cad Centre',
      todoItem: [
        { action: 'Buy milk', done: false },
        { action: 'Doctor visit at 4pm', done: false },
        { action: 'coding a React App at 10am', done: false }
      ],
      newToDo: ''
    };
  }
  toggleDone = (task)=>{
  this.setState({
    todoItem: this.state.todoItem.map((item)=>{
      return(
      (item.action === task.action) ? {...item, done: !item.done} : item
      );
    })
  });
  }
  todoRows = () => {
    return(
        this.state.todoItem.map((item, index)=>{
          return (
            <TodoRows key={index} todoitem={item} callback={this.toggleDone} />
          )
        })
    );
  }

  updateValue = (event) => {
    this.setState({
      newToDo: event.target.value
    });
  }
  newToDo = ()=>{
    this.setState({
      todoItem: [...this.state.todoItem, {action: this.state.newToDo, done: false}]
    });
  }
  render= ()=>{
    return (
      <div className='container'>
        <div className='row'>
          <Navbar name={this.state.userName} />
          <div className='col-12'>
            <input className='form-control' value={this.state.newToDo} onChange={this.updateValue} />
            <button className='btn btn-primary' onClick={this.newToDo}>Add</button>
          </div>
          <div className='col-12'>
            <table className='table'>
              <thead>
                <tr>
                  <th>Tasks</th>
                  <th>Complete</th>
                </tr>
              </thead>
              <tbody>
                {this.todoRows()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
