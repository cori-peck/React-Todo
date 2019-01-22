// your components will all go in this `component` directory.

import React from 'react';

import Todo from './Todo';

function TodoList(props) {
  return (
    <div>
      {props.todos.map(todo => {
        return <Todo toggleDone={props.toggleDone} todo={todo} key={todo.id}/>;
      })}
    </div>
  );
}

export default TodoList;