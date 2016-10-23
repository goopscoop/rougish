import React from 'react';
import Modal from 'react-modal';
import R from 'ramda';
import GenerateCost from '../shared/GenerateCost';
import Strings from '../utils/strings';
import {connect} from 'react-redux';
import {
  toggleUpgradesModal,
  purchaseUpgrade
} from './shopModule';

const UpgradesModal = ({
  toggleUpgradesModal,
  purchaseUpgrade,
  isUpgradesModalOpen,
  whichImprovementIsOpen,
  improvements
}) => {
  const pickAndRenderNextUpgrade = () => {
    const improvement = R.find(
      R.propEq('code', whichImprovementIsOpen)
    )(improvements);
    
    const {
      code: improvementCode,
      upgrades
    } = improvement;

    const nextUpgrade = R.find(
      R.propEq('isPurchased', false)
    )(upgrades);

    if (!nextUpgrade) {
      return (
        <div>{Strings.common.fullyUpgraded}</div>
      );
    }

    const {
      code: upgradeCode,
      label,
      cost
    } = nextUpgrade;

    const handleClick = () => {
      toggleUpgradesModal(null);
      purchaseUpgrade(improvementCode, upgradeCode);
    }

    return (
      <div
        onClick={handleClick}
      >
        {label}
        <GenerateCost cost={cost}/>
      </div>
    )
  }

  return (
    <Modal
        isOpen={isUpgradesModalOpen}
        onRequestClose={toggleUpgradesModal}
        contentLabel="Modal"
    >
      <div className='upgrades-top'>
        <b>
          {
            isUpgradesModalOpen && 
              Strings.improvements[whichImprovementIsOpen].upgrade
          }
        </b>
        {
          isUpgradesModalOpen && 
            pickAndRenderNextUpgrade()
        }
      </div>
      <div className='upgrades-shop'>

      </div>
    </Modal>
  );
}

export default connect(
  state => ({
    isUpgradesModalOpen: state.shop.isUpgradesModalOpen,
    whichImprovementIsOpen: state.shop.whichImprovementIsOpen,
    improvements: state.shop.improvements
  }),
  {
    toggleUpgradesModal,
    purchaseUpgrade
  }
)(UpgradesModal);
