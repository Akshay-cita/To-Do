import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

function App() {
  const date = new Date();
  const hour = date.getHours();
  
  return (
    <div className="FirstDiv">
    <h1>Hi, It is {date.getHours() %12}'O clock already! </h1>
      <Todo />
      <Todo />
      <Todo /> 
    </div>
    
  );
}

export default App;
