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
        <div id="inputs">
          <input
            value={this.state.text}
            onChange={this.handleChange}
            id="description"
          />
          <button onClick={this.handleSubmit}>Add</button>
        </div>
        <br />
        <ul id="todo_list">
          {this.state.items.map(item => {
            console.log(item.done);
            if (item.done) {
              return;
            }
            return (
              <TodoListItem
                description={item.description}
                id={item.id}
                callback={this.handleDone}
              />
            );
          })}
        </ul>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text === "") {
      return;
    }

    let newState = this.state.items.slice();

    newState.push({
      description: this.state.text,
      id: Math.random(),
      done: false
    });
    this.setState({ items: newState, text: "" });
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ text: e.target.value });
  }

  handleDone(id) {
    for (let i = 0; i < this.state.items.length; i++) {
      if (this.state.items[i].id === id) {
      }
    }
  }
}

export default TodoList;
