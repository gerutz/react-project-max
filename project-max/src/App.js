import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  
  state = {
    person : [
      {name: 'Catalina', age:7},
      {name: 'Soledad', age:44},
      {name: 'Catalina', age:7},
    ]
  }

  switchStatusHandler = () => {
   
    this.setState(
      {
        person : [
          {name: 'Catalina Utz Nanni', age:7},
          {name: 'Soledad', age:24},
          {name: 'Catalina', age:7},
        ]
      }
    );
  
  }
  
  render() {
    return (
      <div className="App">
        <h1>Esta es una aplicación React</h1>
        <button onClick={this.switchStatusHandler}>Me interesa</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
        <Person name={this.state.person[1].name} age={this.state.person[1].age} >Bastante baqueteada</Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age} />
      </div>
    
    );
  }
}

export default App;
