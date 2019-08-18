import React, { Component } from "react";
import { todos } from "../todos.json";
import TodoForms from "./TodoForms";

class InfoCards extends Component{
  constructor() {
    super();
    this.state ={
      todos
    }
    this.removeTodo = this.removeTodo.bind(this);
  }

  removeTodo(index){
    this.props.onRemoveTodo(index);
  }
  render(){


    return(
      <div className="card mt-4">
        <div className="card-header">
          <h3>{this.props.title}</h3>
          <span className="badge badge-pill badge-danger ml-2">
            { this.props.priority }
          </span>
        </div>
        <p>{this.props.description}</p>
        <p><mark>{this.props.responsible}</mark></p>
        <div className="card-footer">
          <button
            className="btn btn-danger"
            onClick={this.removeTodo.bind(this.props.index)}
          >
            Delete
          </button>
        </div>
      </div>
    )
  }
}

export default InfoCards;
