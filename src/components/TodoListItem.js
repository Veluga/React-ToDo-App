import React, { Component } from "react";

function TodoListItem(props) {
  return (
    <tr>
      <td>{props.description}</td>
      <td>
        <input type="checkbox" />
      </td>
    </tr>
  );
}

export default TodoListItem;
