import React from 'react';

function TodoForm(props) {
  return (
    <form>
      <input
        value={props.newTodoText}
        type="text"
        onChange={props.handleChanges}
        name="newTodoText"
      />
      <button onClick={props.addTodo}>Add Todo</button>
      <button onClick={props.clearDone}>Remove Completed</button>
    </form>
  );
}

export default TodoForm;