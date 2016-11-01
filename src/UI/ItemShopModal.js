import React from 'react';
import Modal from 'react-modal';
import R from 'ramda';
import ItemDetails from './ItemDetails';
import Strings from '../utils/strings';
import * as shopItems from '../utils/shopItems';
import {connect} from 'react-redux';
import {
  toggleUpgradesModal,
  purchaseUpgrade,
  purchaseItem,
  selectItem
} from './shopModule';
import ShinyPurse from './assets/ShinyPurse';
import Coins from '../assets/icons/blackOnTransparent/Coins';

const ItemShopModal = ({
  toggleUpgradesModal,
  purchaseUpgrade,
  purchaseItem,
  selectItem,
  isUpgradesModalOpen,
  whichImprovementIsOpen,
  improvements,
}) => {

  // if modal is open, determin which improvement 
  // is open
  const improvement = isUpgradesModalOpen && R.find(
    R.propEq('code', whichImprovementIsOpen)
  )(improvements);

  const pickAndRenderNextUpgrade = () => {
    const {
      code: improvementCode,
      upgrades,
      currentLvl
    } = improvement;

    const nextUpgrade = R.find(
      R.propEq('isPurchased', false)
    )(upgrades);

    if (!nextUpgrade) {
      return (
        <span>{Strings.common.fullyUpgraded}</span>
      );
    }

    const {
      code: upgradeCode,
    } = nextUpgrade;

    const handleClick = () => {
      toggleUpgradesModal(null);
      purchaseUpgrade(improvementCode, upgradeCode);
    }

    return (
      <span
        onClick={handleClick}
      >
        {' '}lvl {currentLvl + 1}{' '}
        <ShinyPurse height={'25px'} width={'25px'}/>
      </span>
    )
  };

  const renderItemsList = () => {
    const {currentLvl} = improvement;

    console.log(shopItems)
    const itemIsAvailable = (foundAt, lvl) => {
      console.log(currentLvl)
      return foundAt.includes(whichImprovementIsOpen) &&
        (lvl <= currentLvl);
    };

    // converts the shopItems obj to an arr of the obj values
    // then maps over them
    return Object.values(shopItems).map((item, i) => {
      const { lvl, label, foundAt, } = item;

      const handleInspect = () => {
        selectItem(item)
      }

      if ( itemIsAvailable(foundAt, lvl) ) {
        return (
          <div key={i} onClick={handleInspect} className='row'>
            <div className='five columns'>
            {label}
            </div>
          </div>
        );
      }
      
      return false;
    }); 
  }

  const handleBuyClick = () => {
    purchaseItem()
  }

  return (
    <Modal
        isOpen={isUpgradesModalOpen}
        onRequestClose={toggleUpgradesModal}
        contentLabel="Modal"
    >
      <div className='upgrades-top'>
        <div className='upgrades-top-inner'>
          <b className="improvement-name">
            {
              isUpgradesModalOpen && 
                Strings.improvements[whichImprovementIsOpen].name
            }
          </b>
          {
            isUpgradesModalOpen && 
              pickAndRenderNextUpgrade()
          }
        </div>
      </div>
      <hr />
      <div className='row'>
        <div className='six columns'>
          <ItemDetails />
        </div>
        <div className='six columns'>
          <div className='row item-shop-item-list'>
          {
            isUpgradesModalOpen &&
              renderItemsList()
          }
          </div>
          <div className='row'>
            <button 
              className='item-shop-buy-button'
              onClick={handleBuyClick}
            >
              <Coins height='25px' width='25px' /> BUY
            </button>
          </div>
        </div>
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
    purchaseItem,
    selectItem,
  }
)(ItemShopModal);
