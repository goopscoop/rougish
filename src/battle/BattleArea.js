import React from 'react';
import R from 'ramda';
import {connect} from 'react-redux';
import BattleMenu from '../UI/BattleMenu';
import './styles/battle-area.css';
import Select from '../assets/icons/blackOnTransparent/Select';
import characterRouter from '../chars/characterRouter';
// temp


const BattleArea = ({ activePCs, activeEnemies, activeChar, battleOrder }) => {
  const renderPCs = () => activePCs.map((PC, i) => {
    const renderActivePCArrow = () => {
      if (battleOrder.length === 0) {
        return;
      }
      const currentPCIndex = R.findIndex(R.propEq('code', activeChar.code))(activePCs);
      console.log(PC.imgName)


      if ( i === currentPCIndex){
        return (<div className={`battle-area-active-indicator-${i} battle-area-active-indicator`}><Select /></div>);
      }
      return null;
    }

    const Component = characterRouter(PC.imgName)
    return (
      <div
        key={i}
        className={`battle-area-character battle-area-pc-${i}`}
      >
        {renderActivePCArrow()}
        <Component />
      </div>
      );
  });

  const renderEnemies = () => activeEnemies.map((enemy, i) => {
    console.log(enemy.imgName)
    const Component = characterRouter(enemy.imgName)

    return (
      <div
        key={i}
        className={`battle-area-enemy battle-area-enemy-${i}`}
      >
        <Component />
      </div>
    )
  }); 

  return (
    <div id='battle-area'>
      <BattleMenu />
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
  activeEnemies: state.battle.activeEnemies,
  activeChar: state.battle.activeChar,
  battleOrder: state.battle.battleOrder
})

export default connect(mapStateToProps)(BattleArea)