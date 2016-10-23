import React from 'react';
import Modal from 'react-modal';
import R from 'ramda';
import GenerateCost from '../shared/GenerateCost';
import Strings from '../utils/strings';
import Items from '../utils/items';
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

  // if modal is open, determin which improvement 
  // is open
  const improvement = isUpgradesModalOpen && R.find(
    R.propEq('code', whichImprovementIsOpen)
  )(improvements);

  const pickAndRenderNextUpgrade = () => {
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
  };

  const renderItems = () => {
    const {currentLvl} = improvement;

    let itemList = [];

    if (currentLvl === 0) {
      for ( const itemType in Items ) {
        Items[itemType].lvl1.forEach(el => {
          if ( el.foundAt.includes(whichImprovementIsOpen)) {
            itemList.push(el);
          }
        });
      }
    }

    return itemList.map((el, i) => (
      <div key={i}>
        {el.label}
        <GenerateCost cost={el.cost}/>
      </div>
    ))
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
        {
          isUpgradesModalOpen &&
            renderItems()
        }
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
