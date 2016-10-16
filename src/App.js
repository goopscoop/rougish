import React, { Component } from 'react';
import AreaRouter from './areas/AreaRouter';
import TopMenu from './UI/TopMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopMenu />
        <AreaRouter />
      </div>
    );
  }
}

export default App;
