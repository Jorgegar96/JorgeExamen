import React, { Component } from "react";

class TodoForms extends Component {
  constructor() {
    super();
    this.state = {
      id_prod: "",
      para: "",
      descripcion: "",
      prioridad: "low - $0.00"
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
    alert("Se agregara un nuevo elemento");
    e.preventDefault();
    this.props.onAddTodo(this.state);
  }

  render() {
    return (
      <div className="col-md-4">
        <div className="card mt-4">
          <form className="card-body" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="id_prod"
                onChange={this.handleInput}
                className="form-control"
                placeholder="Codigo"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="para"
                onChange={this.handleInput}
                className="form-control"
                placeholder="Para"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="descripcion"
                onChange={this.handleInput}
                className="form-control"
                placeholder="Descripcion"
              />
            </div>
            <div className="form-group">
              <select
                name="prioridad"
                className="form-control"
                onChange={this.handleInput}
                >
                <option>low - $0.00</option>
                <option>medium - $9.99</option>
                <option>high - $19.99</option>
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
