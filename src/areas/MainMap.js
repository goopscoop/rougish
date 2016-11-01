import React from 'react';
import {connect} from 'react-redux';
import { BATTLE_AREA, BASE, changeArea } from './areasModule';
import './styles/main-map.css';
import Village from '../assets/icons/blackOnTransparent/Village';
import Castle from '../assets/icons/blackOnTransparent/Castle';

const MainMap = ({ changeArea }) => {
  
  const goToBase = () => {
    changeArea(BASE);
  };

  const goToBattleArea = () => {
    changeArea(BATTLE_AREA);
  };

  return (
    <div id="main-background">
      <div 
        onTouchStart={goToBase}
        onClick={goToBase}
        id="base"
      >
        <Village height='250px' width='250px' />
      </div>
      <div
        onClick={goToBattleArea}
        id="dungeon"
      >
        <Castle height='200px' width='200px' />
      </div>
    </div>
  )
};

export default connect(null, {
  changeArea
})(MainMap);