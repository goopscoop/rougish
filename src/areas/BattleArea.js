import React from 'react';
import {connect} from 'react-redux';
import Swordman from '../assets/icons/blackOnTransparent/Swordman';
import Ghost from '../assets/icons/blackOnTransparent/Ghost';
import './styles/battle-area.css';

const BattleArea = ({ activePCs, activeEnemies }) => {
  const renderPCs = () => activePCs.map((PC, i) => (
      <div
        key={i}
        className={`battle-area-character battle-area-pc-${i}`}
      >
        <Swordman />
      </div>
    ));

  const renderEnemies = () => activePCs.map((enemy, i) => (
      <div
        key={i}
        className={`battle-area-enemy battle-area-enemy-${i}`}
      >
        <Ghost />
      </div>
    )); 

  return (
    <div id='battle-area'>
      {
        renderPCs()
      }
      {
        renderEnemies()
      }
    </div>
  );
};

BattleArea.propTypes = {
  activePCs: React.PropTypes.array
}

const mapStateToProps = state => ({
  activePCs: state.chars.activePCs,
  activeEnemies: state.battle.activeEnemies
})

export default connect(mapStateToProps)(BattleArea)