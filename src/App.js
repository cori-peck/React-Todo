import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        items: [
          {
           task: 'Make Dinner',
           id: 1,
           completed: false   
          },
          {
           task: 'Load Dishwasher',
           id: 2,
           completed: false
          },
          {
           task: 'Shower',
           id: 3,
           completed: false
          }
      ]
      }
    }
  render() {
      let title = 'Things to do';

    return (
      <div>
        <TodoList title={title}
          addNew={this.addNew.bind(this)}
          items={this.state.items}
        />
      </div>
    );
  }

  addNew(text) {
    let item = {
      id: this.state.items.length + 1,
      text: text
    };
    let updatedList = this.state.items.concat([item]);

    this.setState({
      items: updatedList
    })
  }
}

export default App;
