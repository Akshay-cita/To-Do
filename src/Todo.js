import React from "react";
import ReactDOM from "react-dom";
import { tsPropertySignature } from "@babel/types";

class Todo extends React.Component {

    render(){
    return (<div className = "todo-item" style={this.props.todo.style}>
    <input type="checkbox" 
    checked={this.props.todo.completed}
    onChange={ () => this.props.handleChange(this.props.todo.id)} />
    
    <p>{this.props.todo.todo}</p>
    </div>)
}
}
export default Todo;