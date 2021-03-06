import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { 
  purchaseImprovement,
  toggleShopModal
} from './shopModule';
import GenerateCost from '../shared/GenerateCost';
import './styles/shop.css';

const ImprovementsShopModal = ({
  isShopModalOpen,
  toggleShopModal,
  improvementsList,
  purchaseImprovement
}) => {
  const generateImprovementsList = () => {
    return improvementsList.map((el, i) => {
      const { name, isPurchased, cost, code } = el;
      
      const handleClick = () => {
        toggleShopModal();
        purchaseImprovement(code);
      }

      if (isPurchased) {
        return null;
      }

      return (
        <div 
          key={i}
          onClick={handleClick}
          className='shop-row'
        >
          {name}
          <GenerateCost cost={cost} />
        </div>
      );
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
  isShopModalOpen: state.shop.isShopModalOpen,
  improvementsList: state.shop.improvements
})

export default connect(
  mapStateToProps, {
    toggleShopModal,
    purchaseImprovement
  }
)(ImprovementsShopModal);