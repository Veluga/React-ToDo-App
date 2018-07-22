import React, { Component } from "react";

class TodoListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.description,
      deadline: Date.now(),
      status: false
    };
  }

  render() {
    return (
      <tr>
        <td>{this.state.description}</td>
        <td>{this.state.deadline}</td>
        <td>{this.state.status}</td>
      </tr>
    );
  }
}

export default TodoListItem;
