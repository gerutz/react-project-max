import React from 'react';

const person = (props) => {

    return (
       <div>
           <p  onClick={props.click}>El primer estudiantes se llama {props.name} y tiene {props.age} años</p>
           <p>{props.children}</p>
           <input type="text" onChange={props.changed}  value={props.name}></input>
       </div>
        
    );
}

export default person;



