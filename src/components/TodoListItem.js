import React from "react";

function TodoListItem(props) {
  return (
    <li>
      {props.description}
      <button
        className="done_button"
        onClick={() => {
          props.callback(props.id);
        }}
      >
        Done
      </button>
    </li>
  );
}

export default TodoListItem;
