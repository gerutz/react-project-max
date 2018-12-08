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

  switchStatusHandler = (newName) => {
   
    this.setState(
      {
        person : [
          {name: newName, age:7},
          {name: 'Soledad', age:24},
          {name: 'Catalina', age:7},
        ]
      }
    );
  
  }

  changeName = (event) => {
    
    this.setState(
      {
        person : [
          {name: 'Cata', age:7},
          {name: event.target.value , age:24},
          {name: 'Catalina', age:7},
        ]
      }
    );

  }
  
  render() {
    return (
      <div className="App">
        <h1>Esta es una aplicación React</h1>
        <button onClick={this.switchStatusHandler.bind(this,"Catalina Utz Nanni")}>Me interesa</button>
        <Person 
        name={this.state.person[0].name} 
        age={this.state.person[0].age}
        />
        <Person 
        name={this.state.person[1].name} 
        age={this.state.person[1].age} 
        click={this.switchStatusHandler.bind(this, "Cata")}
        changed = {this.changeName}>
        Bastante baqueteada
        </Person>
        <Person name={this.state.person[2].name} 
        age={this.state.person[2].age} />
      </div>
    
    );
  }
}

export default App;
