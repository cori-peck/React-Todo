import React from 'react';

function Todo(props) {
  return <div className={props.todo.completed ? 'done' : null} onClick={props.toggleDone(todo.id)}><p>{props.todo.task}</p></div>;
}

export default Todo;