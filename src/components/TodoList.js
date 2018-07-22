import React, { Component } from "react";

import TodoListItem from "./TodoListItem";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      text: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <div id="inputs">
          <input
            value={this.state.text}
            onChange={this.handleChange}
            id="description"
          />
          <button onClick={this.handleSubmit} id="submit_button">
            Add
          </button>
        </div>
        <br />
        <table id="todo_table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map(item => {
              return <TodoListItem description={item.description} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text == "") {
      return;
    }

    let newState = this.state.items.slice();

    newState.push({
      description: this.state.text
    });
    this.setState({ items: newState });
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ text: e.target.value });
  }
}

export default TodoList;
