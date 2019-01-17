import React, { Component } from 'react';
import './App.css';
import FamousForm from './component/FamousForm.js';
import FamousList from './component/FamousList.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
        famousPeople: [],
    }
  }

  addFamousPersonToList = (famousPerson) => {
    console.log('In App.js addFamousPersonToList() with', famousPerson);
    this.setState({
      famousPeople: [...this.state.famousPeople, famousPerson],
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Famous People</h1>
        </header>
        {/* addFamousPersonToList is passed via props */}
        <FamousForm addFamousPersonToList={this.addFamousPersonToList} />
        {/* Dump the information to the page */}
        {JSON.stringify(this.state.famousPeople)}
        <FamousList famousPeople={this.state.famousPeople} />
      </div>
    );
  }
}

export default App;
