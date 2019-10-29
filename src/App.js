import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import TodoList from './todolist';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todo: TodoList
    
  }
  this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
      this.setState(prevState => {
        const Updated = prevState.todo.map( todo => {
          if (todo.id === id) {
            return {
              ...todo,
                            
              completed: !todo.completed,
              
            }
          }
          return todo;
        })
        return {
          todo:Updated
        };
      })
      console.log("updated " ,id)
  }
  
  render()
  {
    function handleClick() {
      console.log("Button Clicked")
    }
    const date = new Date();
    const todolist = this.state.todo.map(todo_item => <Todo key={todo_item.id} todo={todo_item} handleChange={this.handleChange}/> )
    
    return (
    <div className="todo-list">
    <h3>Hi, It is {date.getHours() %12}'O clock already! </h3>
      {todolist}
      <button onClick={handleClick} > Submit </button>
    </div>
    
  );
}
}


export default App;
