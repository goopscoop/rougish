import React from 'react';
import {connect} from 'react-redux';
import ShopModal from '../UI/Shop';
import { MAIN_MAP, changeArea, toggleShopModal } from './areasModule';
import './styles/base.css'

const Base = ({ 
  changeArea,
  toggleShopModal,
  improvements
}) => {
  const goToMain = () => {
    changeArea(MAIN_MAP);
  };

  const renderImprovements = () => {
    return improvements.map((el, i) => {
      if ( el.isPurchased ) {
        return (
          <div key={i} id={el.id}>
            {el.name}
          </div>
        )
      }
    })
  }

  return (
    <div id="base-background">
      <ShopModal />
      <div
        onClick={toggleShopModal}
        id="base-buy-improvements"
      >
        buy improvements
      </div>
      {
        renderImprovements()
      }
      <div
        onClick={goToMain}
        id="base-back-to-main"
      >
        back to main
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  improvements: state.shop.improvements
})

export default connect(mapStateToProps, {
  toggleShopModal,
  changeArea,
})(Base);
