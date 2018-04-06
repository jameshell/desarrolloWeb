import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Persona from './folder/Person'
import PersonaV2 from './folder/PersonV2'

class App extends Component {
  state ={
    "personas":[
      {
        nombre:"Jaime A. Alonso L.",
        edad: 24,
        correo:"jaimea111@gmail.com"
      },
      {
        nombre:"Javier F. Alonso L.",
        edad: 21,
        correo: "javier@gmail.com"
      }
    ],
    "mensaje": "Hola Mundo"
  };

  actualizarInformacionHandler = (mensaje)=>{
    console.log("Click en el botón");
    this.setState(
      {
        "personas": [
          {
            nombre: "James A. Alonso L.",
            edad: 24,
            correo: "jaimea111@gmail.com"
          },
          {
            nombre: "Javi F. Alonso L.",
            edad: 21,
            correo: "javier@gmail.com"
          }
        ],
        "mensaje": `Saludos ${mensaje}`
      }
    );
  }

  actualizarMensajeHandler = (event)=>{
    this.setState(
      {
        "mensaje":event.target.value
      }
    );
  }

  render() {

    //return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Hola Mundo'));
        
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <div Classname="App-intro">
          <Persona change={this.actualizarMensajeHandler} click={this.actualizarInformacionHandler.bind(this,"Jaime")} name={this.state.personas[0].nombre} age={this.state.personas[0].edad}>
          {this.state.personas[0].correo}
          </Persona>
          <PersonaV2 click={this.actualizarInformacionHandler.bind(this, "Javier")} name={this.state.personas[1].nombre} age={this.state.personas[1].edad}>
            {this.state.personas[1].correo}
          </PersonaV2>
          <h1>{this.state.mensaje}</h1>
          </div>
      </div>
    );
    
  }
}

export default App;