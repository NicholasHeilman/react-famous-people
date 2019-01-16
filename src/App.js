import React, { Component } from 'react';
import './App.css';
import Header from './component/header.js';
import FamousPerson from './component/FamousPerson.js';
import SubmitButton from './component/SubmitButton.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Header />
        </header>
        <FamousPerson />
        <SubmitButton />
      </div>
    );
  }
}

export default App;
