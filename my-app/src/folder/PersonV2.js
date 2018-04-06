import React, { Component } from 'react';
class Person extends Component{
    render(){
        return(
            <div>
                <h1>Soy componente stateful</h1>
                <h2>{this.props.name}</h2>
                <h3>{this.props.age}</h3>
                <p>{this.props.children}</p>
                <p>{Math.floor(Math.random() * 30)}</p>
                <button onClick={this.props.click}>Actualizar Información</button>
            </div>
        );
    }
}
export default Person;