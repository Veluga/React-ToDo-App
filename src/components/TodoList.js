import React, { Component } from "react";

import TodoListItem from "./TodoListItem";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //Stores todo list items
      items: [],
      //Stores done items
      done: [],
      //Current text in input field
      text: ""
    };
    //Scope binding
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDone = this.handleDone.bind(this);
  }

  render() {
    //Conditional headers
    let todoHeader = null;
    let doneHeader = null;
    let hrSeperator = null;

    if (this.state.items.length > 0) {
      todoHeader = <h5>Todo</h5>;
    }

    if (this.state.done.length > 0) {
      doneHeader = <h5>Done</h5>;
      hrSeperator = <hr />;
    }
    return (
      <div>
        {/* Input field and add button */}
        <div id="inputs">
          <input
            value={this.state.text}
            onChange={this.handleChange}
            id="description"
          />
          <button onClick={this.handleSubmit}>Add</button>
        </div>
        <br />
        {/* ul for todo section*/}
        <ul id="todo_list">
          {todoHeader}
          {this.state.items.map(item => {
            return (
              //Render TodoListItems
              <TodoListItem
                description={item.description}
                id={item.id}
                callback={this.handleDone}
                displayButton={item.displayButton}
              />
            );
          })}
        </ul>
        <br />
        {hrSeperator}
        <br />
        <ul id="done_list">
          {/* Done list */}
          {doneHeader}
          {this.state.done.map(item => {
            return (
              <TodoListItem
                description={item.description}
                id={item.id}
                displayButton={item.displayButton}
              />
            );
          })}
        </ul>
      </div>
    );
  }

  //Handler for adding new item
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text === "") {
      return;
    }

    let newState = this.state.items.slice();

    newState.push({
      description: this.state.text,
      id: Math.random(),
      displayButton: true
    });
    this.setState({ items: newState, text: "" });
  }

  //Handle change to input field
  handleChange(e) {
    e.preventDefault();
    this.setState({ text: e.target.value });
  }

  //Handle 'done' button press on todo list item
  handleDone(id) {
    let newItemsState = [];
    let newDoneState = this.state.done;
    for (let i = 0; i < this.state.items.length; i++) {
      let item = this.state.items[i];
      if (this.state.items[i].id !== id) {
        newItemsState.push(item);
      } else {
        item.displayButton = false;
        newDoneState.push(item);
      }
    }
    this.setState({ items: newItemsState, done: newDoneState });
  }
}

export default TodoList;
