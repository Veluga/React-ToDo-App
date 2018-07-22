import React, { Component } from "react";

import "../style/App.css";
import TodoListItem from "./TodoListItem";

class App extends Component {
  render() {
    return (
      <table>
        <tr>
          <th>Description</th>
          <th>Deadline</th>
          <th>Done?</th>
        </tr>
        <TodoListItem description="this is a description" />
      </table>
    );
  }
}

export default App;
