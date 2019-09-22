import React from "react";
import { connect } from "react-redux";

function EditTodo({ dispatch, onEdit }) {
  let input;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(onEdit(input.value));
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Edit</button>
      </form>
    </div>
  );
}

export default connect()(EditTodo);
