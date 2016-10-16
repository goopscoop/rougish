import React from 'react';
import {connect} from 'react-redux';
import { BASE, changeArea } from './areasModule';
import './styles/main-map.css';

const MainMap = ({ changeArea }) => {
  
  const goToBase = () => {
    changeArea(BASE);
  }

  return (
    <div id="main-background">
      <div 
        onTouchStart={goToBase}
        onClick={goToBase}
        id="base"
      >
        <h2>Main Base</h2>
      </div>
      <div id="dungeon">
        <h2>Dungeon</h2>
      </div>
    </div>
  )
};

export default connect(null, {
  changeArea
})(MainMap);