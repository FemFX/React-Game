import React, { Component } from 'react';
import Header from './components/Header';
import Game from './components/Game';

class App extends Component { 
  render() {
    return (
      <div className="App">
        <Header />
        <Game />
      </div>
    );
  }
}

export default App;
