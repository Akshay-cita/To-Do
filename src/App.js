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
      <Todo todo="Do something special"/>
      <Todo todo="Do something adventurous"/>
      <Todo todo="Do something dangerous"/>
      <Todo todo="Do something daily"/>
      <Todo todo="Do something interesting"/>
      <Todo todo="Do something different"/> 
    </div>
    
  );
}

export default App;
