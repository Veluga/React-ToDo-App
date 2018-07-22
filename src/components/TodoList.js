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
    this.handleDone = this.handleDone.bind(this);
  }

  render() {
    return (
      <div>
        <table>
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
        <input onChange={this.handleChange} value={this.state.text} />
        <button onClick={this.handleSubmit}>Add</button>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    let prevState = this.state.items.slice();

    prevState.push({
      description: this.state.text
    });
    this.setState({ items: prevState });
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleDone(e) {}
}

export default TodoList;
