import React from "react";
import ReactDOM from "react-dom";
import { tsPropertySignature } from "@babel/types";

function Todo(props) {
    return (<div class = "todo-item"><input type="checkbox"/>
    <p>{props.todo}</p>
    </div>)
}
export default Todo;