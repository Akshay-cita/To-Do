import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

function App() {
  const date = new Date();
  const hour = date.getHours();
  
  return (
    <div className="todo-list">
    <h1>Hi, It is {date.getHours() %12}'O clock already! </h1>
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo /> 
    </div>
    
  );
}

export default App;
