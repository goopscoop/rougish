import React from 'react';
import {connect} from 'react-redux';
import ImprovementShopModal from '../UI/ImprovementShopModal';
import ItemShopModal from '../UI/ItemShopModal';
import { MAIN_MAP, changeArea } from './areasModule';
import {
  toggleShopModal,
  toggleUpgradesModal
} from '../UI/shopModule';
import './styles/base.css'

const Base = ({ 
  changeArea,
  toggleShopModal,
  toggleUpgradesModal,
  improvements
}) => {
  const goToMain = () => {
    changeArea(MAIN_MAP);
  };

  const renderImprovements = () => {
    return improvements.map((el, i) => {
      const openUpgradeModal = () => {
        toggleUpgradesModal(el.code)
      }

      if ( el.isPurchased ) {
        return (
          <div
            key={i}
            id={el.id}
            onClick={openUpgradeModal}
          >
            {el.name}
          </div>
        )
      }
      return false;
    })
  }

  return (
    <div id="base-background">
      <ImprovementShopModal />
      <ItemShopModal />
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
  toggleUpgradesModal,
  changeArea,
})(Base);
