import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import {dismissNotification} from './notificationsModule';
import './styles/notifications.css';

const NotificationModal = ({
  isOpen,
  message,
  dismissNotification
}) => {
  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={dismissNotification}
        contentLabel="Modal"
    >
      <div className='notifications-body'>
        {
          message
        }
      </div>
      <div className='notifications-footer'>
        <button onClick={dismissNotification}>
          Dismiss
        </button>
      </div>
    </Modal>
  );
}

export default connect(
  state => ({
    isOpen: state.notifications.isOpen,
    message: state.notifications.message
  }), {
    dismissNotification
  }
)(NotificationModal);
