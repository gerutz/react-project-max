import React from 'react';

const person = (props) => {

    return (
       <div>
           <p>El primer estudiantes se llama {props.name} y tiene {props.age} años</p>
           <p>{props.children}</p>
       </div>
        
    );
}

export default person;



