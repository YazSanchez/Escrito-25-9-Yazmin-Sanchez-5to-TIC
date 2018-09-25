import React, { Component } from 'react';
import './App.css';
import Padre from './componentes/padre/padre.js';

class App extends Component {
  render() {

    var cantHijos = 2;
    
    return (
      
      <div className="App">
        <Padre />
      </div>
    );
  }
}

export default App;
