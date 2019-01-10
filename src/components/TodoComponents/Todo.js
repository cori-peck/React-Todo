import React from "react";

function Todo(props) {
    const item = props;

    return (
        <li key={item.id} className="ui-state-default">
            <div className="checkbox">
                <label>
                    <input type="checkbox" value=""/> {item.task}
                </label>
            </div>
        </li>
    );
}

export default Todo;