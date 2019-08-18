import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from "./components/Navigation";
import { todos } from "./todos.json";
import TodoForms from "./components/TodoForms";
import InfoCards from "./components/InfoCards";
console.log(todos);

class App extends Component {
  constructor(){
    super();
    this.state = {
      title: "Aplicacion de Tareas",
      ntareas: todos.length,
      todos
    };
    this.handleAddTodo=this.handleAddTodo.bind(this);
    this.removeTodo=this.removeTodo.bind(this);
  }

  removeTodo(index){
    if(window.confirm("Are you sure you want to delete de todo?")){
      this.setState({
        todos: this.state.todos.filter((todo, i)=>{
          return i != index
        })
      })
    }

  }

  handleAddTodo(todo){
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render(){
    const todos = this.state.todos.map((todo,i) => {
      return (
        <div className="col-md-4" key={i}>
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
        </div>)
    })
    return (
      <div className="App">


        <Navigation title= { this.state.title } ntareas= {this.state.ntareas} />
        <div className="container bg-white">
          <h1>Pedidos en Linea</h1>
        </div>
        <div className="container">
          <div className="row mt-4">
          <img src={logo} className="App-logo" alt="logo" />

            <TodoForms onAddTodo={this.handleAddTodo}/>
            { todos }
          </div>
        </div>
        <header className="App-header">


        </header>
      </div>
    );
  }
}

export default App;
