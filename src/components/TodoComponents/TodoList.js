// your components will all go in this `component` directory.

import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList(props) {
    const {title, items, addNew} = props;

    return (
        <div className="todolist">
            <TodoForm title={title} addNew={addNew} />

                <ul>
                   {items.map(item => <Todo data={item}/>)}
                </ul>
        </div>
    );
}

export default TodoList;