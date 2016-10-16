import React from 'react';
import {connect} from 'react-redux';
import { MAIN_MAP, changeArea } from './areasModule';
import './styles/base.css'

const Base = ({ changeArea }) => {
  const goToMain = () => {
    changeArea(MAIN_MAP);
  };

  const openStore = () => {

  }

  return (
    <div id="base-background">
      <div
        onTouchStart={openStore}
        onClick={openStore}
        id="base-buy-improvements"
      >
        buy improvements
      </div>

      <div
        onTouchStart={goToMain}
        onClick={goToMain}
        id="base-back-to-main"
      >
        back to main
      </div>
    </div>
  )
}

export default connect(null, {
  changeArea
})(Base);
