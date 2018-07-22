import React from "react";

function TodoListItem(props) {
  return (
    <li>
      {props.description}
      <button class="done_button">Done</button>
    </li>
  );
}

export default TodoListItem;
