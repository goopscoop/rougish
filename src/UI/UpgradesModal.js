import React from 'react';
import Modal from 'react-modal';
import R from 'ramda';
import GenerateCost from '../shared/GenerateCost';
import {connect} from 'react-redux';
import {
  toggleUpgradesModal,
  purchaseUpgrade
} from './shopModule';

const UpgradesModal = ({
  toggleUpgradesModal,
  purchaseUpgrade,
  isUpgradesModalOpen,
  whichUpgradeIsOpen,
  improvements
}) => {
  const generateUpgradesList = () => {
    const upgrade = R.find(
      R.propEq('code', whichUpgradeIsOpen)
    )(improvements);
    
    const {
      code: improvementCode
    } = upgrade;

    return upgrade.upgrades.map((el, i) => {
      const { 
        label,
        cost,
        isPurchased,
        code: upgradeCode
      } = el;

      const handleClick = () => {
        toggleUpgradesModal(null);
        purchaseUpgrade(improvementCode, upgradeCode);
      }

      if (isPurchased) {
        return null;
      }

      return (
        <div 
          key={i}
          className='shop-row'
          onClick={handleClick}
        >
          {label}
          <GenerateCost cost={cost}/>
        </div>
      )
    })
  }

  return (
    <Modal
        isOpen={isUpgradesModalOpen}
        onRequestClose={toggleUpgradesModal}
        contentLabel="Modal"
    >
      <h2>Buy Upgrades</h2>
      {
        isUpgradesModalOpen && generateUpgradesList()
      }
    </Modal>
  );
}

export default connect(
  state => ({
    isUpgradesModalOpen: state.shop.isUpgradesModalOpen,
    whichUpgradeIsOpen: state.shop.whichUpgradeIsOpen,
    improvements: state.shop.improvements
  }),
  {
    toggleUpgradesModal,
    purchaseUpgrade
  }
)(UpgradesModal);
