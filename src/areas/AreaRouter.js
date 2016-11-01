import React from 'react';
import {connect} from 'react-redux'
import { MAIN_MAP, BASE, BATTLE_AREA } from './areasModule';
import MainMap from './MainMap';
import Base from './Base';
import BattleArea from './BattleArea';

const AreaRouter = ({ currentArea }) => {
  const renderWhichArea = () => {
    switch(currentArea) {
      case BASE:
        return <Base />
      case BATTLE_AREA:
        return <BattleArea />
      case MAIN_MAP:
        return <MainMap />;
      default:
        return <MainMap />
    }
  }

  return renderWhichArea();
}

const mapStateToProps = state => ({
  currentArea: state.areas.currentArea
})

export default connect(mapStateToProps)(AreaRouter);
