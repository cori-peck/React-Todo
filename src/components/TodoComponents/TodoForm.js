import React from 'react';
import InputBox from './InputBox';

function TodoForm(props) {
    const {title, addNew} = props;

    return (
        <header>
            <h1>{title.toUpperCase()}</h1>
            <InputBox addNew={addNew} />
        </header>
    );
}

export default TodoForm;