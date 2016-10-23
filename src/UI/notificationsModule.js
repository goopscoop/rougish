const NOTIFY_USER = '@notifications/NOTIFY_USER';
const DISMISS_NOTIFICATION = '@notifications/DISMISS_NOTIFICATION';

export const notifyUser = message => ({
  type: NOTIFY_USER,
  message
});

export const dismissNotification = () => ({
  type: DISMISS_NOTIFICATION
})

const initialState = {
  isOpen: false,
  message: ''
};

export default function notificationsReducer(state = initialState, action) {
  switch (action.type) {
    case NOTIFY_USER:
      return {
        ...state,
        isOpen: true,
        message: action.message
      }
    case DISMISS_NOTIFICATION:
      return {
        ...state,
        isOpen: false,
        message: ''
      }
    default:
      return state;
  }
}
