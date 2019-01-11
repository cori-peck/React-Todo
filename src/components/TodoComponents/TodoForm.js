import React from 'react';

function TodoForm(props) {
  return (
    <form className="formInput">
      <input className="textBx"
        value={props.newTodoText}
        type="text"
        onChange={props.handleChanges}
        name="newTodoText"
      />
      <button className="btn" onClick={props.addTodo}>Add Todo</button>
      <button className="btn" onClick={props.clearDone}>Remove Completed</button>
    </form>
  );
}

export default TodoForm;