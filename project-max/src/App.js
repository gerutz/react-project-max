import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Esta es una aplicación React</h1>
        <Person name="Catalina" age="7" />
        <Person name="Soledad" age="44" />
        <Person name="Alicia " age="7" />
      </div>
    );
  }
}

export default App;
