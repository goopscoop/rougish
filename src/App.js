import React, { Component } from 'react';
import MainMap from './areas/MainMap';
import TopMenu from './UI/TopMenu';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopMenu />
        <MainMap />
      </div>
    );
  }
}

export default App;
