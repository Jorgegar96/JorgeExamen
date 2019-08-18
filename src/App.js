import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from "./components/Navigation";
import { pedidos } from "./pedidos.json";
import TodoForms from "./components/TodoForms";
import InfoCards from "./components/InfoCards";
console.log(pedidos);

class App extends Component {
  constructor(){
    super();
    this.state = {
      title: "Aplicacion de Pedidos",
      npedidos: pedidos.length,
      pedidos
    };
    this.handleAddTodo=this.handleAddTodo.bind(this);
    this.removeTodo=this.removeTodo.bind(this);
  }

  removeTodo(index){
    if(window.confirm("El pedido ha sido entregado?")){
      this.setState({
        pedidos: this.state.pedidos.filter((pedido, i)=>{
          return i != index
        })
      })
    }

  }

  handleAddTodo(pedido){
    this.setState({
      todos: [...this.state.pedidos, pedido]
    })
  }

  render(){
    const pedidos = this.state.pedidos.map((pedido,i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header">
              <h3>{pedido.id_prod}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                { pedido.prioridad }
              </span>
            </div>
            <p>{pedido.descripcion}</p>
            <p><mark>{pedido.para}</mark></p>
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


        <Navigation title= { this.state.title } npedidos= {this.state.npedidos} />
        <div className="container bg-white">
          <h1>Pedidos en Linea</h1>
        </div>
        <div className="container">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="row mt-4">


            <TodoForms onAddTodo={this.handleAddTodo}/>
            { pedidos }
          </div>
        </div>
        <header className="App-header">


        </header>
      </div>
    );
  }
}

export default App;
