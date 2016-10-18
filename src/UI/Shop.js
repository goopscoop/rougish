import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { toggleShopModal } from '../areas/areasModule';
import { purchaseImprovement } from './shopModule';

const Shop = ({
  isShopModalOpen,
  toggleShopModal,
  improvementsList,
  purchaseImprovement
}) => {
  const generateImprovementsList = () => {
    return improvementsList.map((el, i) => {
      const handleClick = () => {
        toggleShopModal();
        purchaseImprovement(el.name);
      }

      if (!el.isPurchased) {
        return (
          <div 
            key={i}
            onClick={handleClick}
          >
            {el.name}
          </div>
        );
      }
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