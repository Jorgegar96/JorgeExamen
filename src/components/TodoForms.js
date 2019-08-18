import React, { Component } from "react";

class TodoForms extends Component {
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

  handleInput(e) {
    const {value, name} = e.target;
    this.setState({
      [name]:value
    })
    console.log(this.state);
  }

  handleSubmit(e) {
    alert("sending...");
    e.preventDefault();
    this.props.onAddTodo(this.state);
    console.log("sending the data...");
  }

  render() {
    return (
      <div className="col-md-4">
        <div className="card mt-4">
          <form className="card-body" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="title"
                onChange={this.handleInput}
                className="form-control"
                placeholder="Title"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="responsible"
                onChange={this.handleInput}
                className="form-control"
                placeholder="Responsible"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="description"
                onChange={this.handleInput}
                className="form-control"
                placeholder="Description"
              />
            </div>
            <div className="form-group">
              <select
                name="priority"
                className="form-control"
                onChange={this.handleInput}
                >
                <option>low</option>
                <option>medium</option>
                <option>high</option>
              </select>
            </div>
            <button type="Submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default TodoForms;
