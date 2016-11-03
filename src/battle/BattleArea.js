import React from 'react';
import R from 'ramda';
import {connect} from 'react-redux';
import BattleMenu from '../UI/BattleMenu';
import './styles/battle-area.css';
import Select from '../assets/icons/blackOnTransparent/Select';

// temp
// import Swordman from '../assets/icons/blackOnTransparent/Swordman';
// import Ghost from '../assets/icons/blackOnTransparent/Ghost';

const BattleArea = ({ activePCs, activeEnemies, activeChar, battleOrder }) => {
  const renderPCs = () => activePCs.map((PC, i) => {
    const renderActivePCArrow = () => {
      if (battleOrder.length === 0) {
        return;
      }
      const currentPCIndex = R.findIndex(R.propEq('code', activeChar.code))(activePCs);

      if ( i === currentPCIndex){
        return (<div className={`battle-area-active-indicator-${i} battle-area-active-indicator`}><Select /></div>);
      }
      return null;
    }

    let CharComponent;

    require(`async-module!../assets/icons/blackOnTransparent/${imgName}.js`)(function onLoad(component) {
       CharComponent = component;
    }, function onError(err) {
      console.error(err)
    });

    return (
      <div
        key={i}
        className={`battle-area-character battle-area-pc-${i}`}
      >
        {renderActivePCArrow()}
        <CharComponent />
      </div>
      );
  });

  const renderEnemies = () => activePCs.map((enemy, i) => (
      <div
        key={i}
        className={`battle-area-enemy battle-area-enemy-${i}`}
      >

      </div>
    )); 

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