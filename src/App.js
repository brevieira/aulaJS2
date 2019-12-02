import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      nome:null,
      idade:null,
      pais:null,
    }
  }

  peganome = (event) => {
    this.setState({
      nome:event.target.value
    })  
  }
  pegaidade = (event) => {
    this.setState({
      idade:event.target.value
    })
  }
  pegapais = (event) => {
  this.setState({
    pais:event.target.value
    })
  }
  render() {
    return (
      <div className="App">

        <div className="divUM">

          <form className="form">
            <label>
              nome:
            <input type="text" name="nome" onChange={this.peganome}></input>
            </label>
            <label>
              idade:
            <input type="text" name="idade" onChange={this.pegaidade}></input>
            </label>
            <label>
              país:
            <input type="text" name="país" onChange={this.pegapais}></input>
            </label>
          </form>
            <div>
              <p>{this.state.nome}</p>
              <p>{this.state.idade}</p>
              <p>{this.state.pais}</p>
            </div>

        </div>

      </div>
    );
  }
}

export default App;
