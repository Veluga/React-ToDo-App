import React, { Component } from "react";

import TodoListItem from "./TodoListItem";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = { items: [] };
  }
}

export default TodoList;
