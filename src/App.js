import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import TodoList from './todolist';

function App() {
  const date = new Date();
  const todolist = TodoList.map(todo_list => <Todo key={todo_list.id} todo={todo_list.todo} completed={todo_list.completed} /> )
  return (
    <div className="todo-list">
    <h1>Hi, It is {date.getHours() %12}'O clock already! </h1>
      {todolist}
    </div>
    
  );
}

export default App;
