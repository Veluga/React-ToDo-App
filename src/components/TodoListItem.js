import React, { Component } from "react";

function TodoListItem(props) {
  return (
    <tr>
      <td>{props.description}</td>
      <td>{props.date}</td>
      <td>{props.status}</td>
    </tr>
  );
}

export default TodoListItem;
