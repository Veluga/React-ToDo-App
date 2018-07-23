import React from "react";

function TodoListItem(props) {
  let button = null;
  //Conditional button rendering (in todo or done list? Hide in latter)
  if (props.displayButton) {
    button = (
      <button
        className="done_button"
        onClick={() => {
          props.callback(props.id);
        }}
      >
        Done
      </button>
    );
  }

  return (
    <li>
      {props.description}
      {button}
    </li>
  );
}

export default TodoListItem;
