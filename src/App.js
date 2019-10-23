import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const date = new Date();
  const hour = date.getHours();
  let welcometext;
  const styles = {
    fontSize: 30
  };
  if (hour > 6 && hour < 12) {
    styles.color = "orange"
    welcometext = "This is morning!"
  }
  else if (hour > 12 && hour < 16) {
    styles.color = "red";
    welcometext = "This is AfterNoon!";
  }
  else if (hour > 16 && hour < 20) {
    styles.color = "brown";
    welcometext = "This is evening!";
  }
  else if (hour > 20 && hour < 25 || hour < 6 ) {
    styles.color = "black";
    welcometext = "This is night!";
  }
  
  return (
    <div className="FirstDiv">
    <h1>Hi, It is {date.getHours() %12}'O clock already! </h1>
    <div style={{styles}}><input type="checkbox"/>
    <p>{welcometext}</p>
    </div>
    <div style={{styles}}><input type="checkbox"/>
    <p>{welcometext}</p>
    </div>
    <div style={{styles}}><input type="checkbox"/>
    <p>{welcometext}</p>
    </div>
    <div style={{styles}}><input type="checkbox"/>
    <p>{welcometext}</p>
    </div>
    </div>
    
  );
}

export default App;
