import React, { Component } from "react";

class InfoCards extends Component{
  constructor() {
    super();
    this.state = {
      title: "",
      responsible: "",
      description: "",
      priority: "low"
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render(){
    return(
      <div className="card mt-4">
        <div className="card-header">
          <h3>{todo.title}</h3>
          <span className="badge badge-pill badge-danger ml-2">
            { todo.priority }
          </span>
        </div>
        <p>{todo.description}</p>
        <p><mark>{todo.responsible}</mark></p>
        <div className="card-footer">
          <button
            className="btn btn-danger"
            onClick={this.removeTodo.bind(this,i)}
          >
            Delete
          </button>
        </div>
      </div>
    )
  }
}

export default InfoCards;
