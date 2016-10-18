const CHANGE_AREA = '@areas/CHANGE_AREA';
const TOGGLE_SHOP_MODAL = '@areas/TOGGLE_SHOP_MODAL';

// Areas

export const MAIN_MAP = '@areas/MAIN_MAP';
export const BASE = '@areas/BASE';

export const changeArea = (newArea) => ({
  type: CHANGE_AREA,
  newArea
});

export const toggleShopModal = () => ({
  type: TOGGLE_SHOP_MODAL
})

const initialState = {
  currentArea: MAIN_MAP,
  isShopModalOpen: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_AREA:
      return Object.assign({},
        state,
        {
          currentArea: action.newArea
        }
      );
    case TOGGLE_SHOP_MODAL:
      return Object.assign({},
        state,
        {
          isShopModalOpen: !state.isShopModalOpen
        }
      );
    default:
      return state;
  }
}