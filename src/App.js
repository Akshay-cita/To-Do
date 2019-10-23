import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const date = new Date();
  const string1 = "This is the first task!"
  const string4 = "This is the last task!"
  const string3 = "This is the third task!"
  const string2 = "This is the second task!"
  return (
    <div className="FirstDiv">
    <h1>Hi, It is {date.getHours() %12}'O clock already! </h1>
    <div className="Checkbox-div"><input type="checkbox"/>
    <p>{string1}</p>
    </div>
    <div className="Checkbox-div"><input type="checkbox"/>
    <p>{string2}</p>
    </div>
    <div className="Checkbox-div"><input type="checkbox"/>
    <p>{string3}</p>
    </div>
    <div className="Checkbox-div"><input type="checkbox"/>
    <p>{string4}</p>
    </div>
    </div>
    
  );
}

export default App;
