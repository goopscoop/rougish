import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { toggleShopModal } from '../areas/areasModule';
import { purchaseImprovement } from './shopModule';
import './styles/shop.css';

const Shop = ({
  isShopModalOpen,
  toggleShopModal,
  improvementsList,
  purchaseImprovement
}) => {
  const generateImprovementsList = () => {
    return improvementsList.map((el, i) => {
      const { name, isPurchased, cost } = el;
      const handleClick = () => {
        toggleShopModal();
        purchaseImprovement(name);
      }

      const renderCost = () => {
        const costElements = [];

        if ( cost.gold > 0 ) {
          costElements.push(
            <span
              className='shop-cost'
              key='gold'
            >
              <b>Gold: </b>{cost.gold}
            </span>
          );
        }

        if ( cost.iron > 0 ) {
          costElements.push(
            <span
              className='shop-cost'
              key='iron'
            >
              <b>Iron: </b>{cost.iron}
            </span>
          );
        }

        if ( cost.gin > 0 ) {
          costElements.push(
            <span
              className='shop-cost'
              key='gin'
            >
              <b>Gin: </b>{cost.gin}
            </span>
          );
        }

        if ( cost.crystals > 0 ) {
          costElements.push(
            <span
              className='shop-cost'
              key='crystals'>
              <b>Crystals: </b>{cost.crystals}
            </span>
          );
        }

        return <span>{costElements}</span>;
      }

      if (!isPurchased) {
        return (
          <div 
            key={i}
            onClick={handleClick}
            className='shop-row'
          >
            {name}
            {renderCost()}
          </div>
        );
      }

      return false;
    });
  }

  return (
    <Modal
        isOpen={isShopModalOpen}
        onRequestClose={toggleShopModal}
        contentLabel="Modal"
    >
      <h2>Buy improvements</h2>
      {
        generateImprovementsList()
      }
    </Modal>
  );
}

const mapStateToProps = state => ({
  isShopModalOpen: state.areas.isShopModalOpen,
  improvementsList: state.shop.improvements
})

export default connect(
  mapStateToProps, {
    toggleShopModal,
    purchaseImprovement
  }
)(Shop);