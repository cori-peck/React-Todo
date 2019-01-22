import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos, // same as todos: todos,
      newTodoText: ''
    };
  }

  handleChanges = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  addTodo = e => {
    e.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        {
          task: this.state.newTodoText,
          id: Date.now(),
          completed: false
        }
      ],
      newTodoText: ''
    });
  };

  toggleDone = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) {
          return todo;
        } else {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
      })
    });
  };

  clearDone = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  };

  render() {
    return (
      <div>
        <header>
          <img src="https://cdn.xl.thumbs.canstockphoto.com/busy-businesswoman-eps-vectors_csp22928432.jpg" alt="busy woman"></img>
        <h2 className="title">Todo List</h2>
        </header>
        <TodoList toggleDone={this.toggleDone} todos={this.state.todos} />
        <TodoForm
          addTodo={this.addTodo}
          handleChanges={this.handleChanges}
          newTodoText={this.state.newTodoText}
          clearDone={this.clearDone}
        />
      </div>
    );
  }
}

export default App;