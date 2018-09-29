import React, { Component } from 'react';
import MainContainer from './components/main_container'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">カレンダー</h1>
        </header>
        <MainContainer />
      </div>
    );
  }
}

export default App;
