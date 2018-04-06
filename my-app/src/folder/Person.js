import React from 'react'
const person = (props)=>{
    return(
        <div>
            <h1>Soy componente stateless</h1>
            <h2>{props.name}</h2>
            <h3>{props.age}</h3>
            <p>{props.children}</p>
            <p>{Math.floor(Math.random()*30)}</p>
            <button onClick={props.click}>Actualizar Información</button>
            <input type="text" onChange={props.change} value={props.mensaje}/>
        </div>
    );
}

export default person;