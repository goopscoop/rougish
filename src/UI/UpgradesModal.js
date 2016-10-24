import React from 'react';
import Modal from 'react-modal';
import R from 'ramda';
import GenerateCost from '../shared/GenerateCost';
import Strings from '../utils/strings';
import Items from '../utils/items';
import {connect} from 'react-redux';
import {
  toggleUpgradesModal,
  purchaseUpgrade,
  purchaseItem
} from './shopModule';

const UpgradesModal = ({
  toggleUpgradesModal,
  purchaseUpgrade,
  purchaseItem,
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

    const itemIsAvailable = (foundAt, lvl) => {
      return foundAt.includes(whichImprovementIsOpen) &&
        (lvl <= currentLvl);
    };

    return Items.map((item, i) => {
      const { lvl, type, cost, label, foundAt, code } = item;
      const handleBuyClick = () => {
        purchaseItem(item);
      }

      if ( itemIsAvailable(foundAt, lvl) ) {
        return (
          <div key={i} className='row'>
            <div className='five columns'>
            {label}
            </div>
            <div className='four columns'>
              <GenerateCost cost={cost}/>
            </div>
            <div className='one column'>
              <button className="btn-sm">i</button>
            </div>
            <div className='one column'>
              <button
                className='btn-sm'
                onClick={handleBuyClick}
              >$</button>
            </div>
          </div>
        );
      }
    }); 
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
      <hr />
      <div>
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
    purchaseUpgrade,
    purchaseItem
  }
)(UpgradesModal);
