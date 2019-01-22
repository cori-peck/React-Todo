import React from 'react';

function Todo(props) {
    const { toggleDone, todo } = props;

    return (
        <p 
            className={todo.completed ? 'done' : null} 
            onClick={e => toggleDone(todo.id)}
        >
        {todo.task}
        </p>
    );
}

export default Todo;