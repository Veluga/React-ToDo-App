import React, { Component } from "react";

import TodoListItem from "./TodoListItem";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = { items: [] };
  }

  render() {
    return (
      <table>
        <tr>
          <th>Description</th>
          <th>Deadline</th>
          <th>Done?</th>
        </tr>
        {this.state.items.map(item => {
          return item;
        })}
      </table>
    );
  }

  addItem(description, deadline) {
    this.setState(previousState => {
      return previousState.push(
        <TodoListItem description={description} deadline={deadline} />
      );
    });
  }
}

export default TodoList;
