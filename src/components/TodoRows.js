import React, { Component } from 'react';

export class TodoRows extends Component {
  render = () => {
    return (
        <tr>
        <td>{this.props.todoitem.action}</td>
        <td><input type='checkbox' checked={this.props.todoitem.done} onChange={()=>this.props.callback(this.props.todoitem)} /></td>
        </tr>
    );
  }
}

export default TodoRows;
