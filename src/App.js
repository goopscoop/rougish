import React, { Component } from 'react';
import AreaRouter from './areas/AreaRouter';
import TopMenu from './UI/TopMenu';
import NotificationModal from './UI/NotificationModal';
import './normalize.css';
import './skeleton.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NotificationModal />
        <TopMenu />
        <AreaRouter />
      </div>
    );
  }
}

export default App;
