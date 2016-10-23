import R from 'ramda';
import {notifyUser} from './notificationsModule';
import {reduceResources} from '../user/userModule';
import Strings from '../utils/strings';
import improvements from '../utils/improvements';

const PURCHASE_IMPROVEMENT = '@shop/PURCHASE_IMPROVEMENT';
const TOGGLE_SHOP_MODAL = '@shop/TOGGLE_SHOP_MODAL';

export const toggleShopModal = () => ({
  type: TOGGLE_SHOP_MODAL
});

const _compairCostToResources = (cost, resources) => {
  if ( cost.gold && cost.gold > resources.gold ) {
    return false;
  }

  if ( cost.iron && cost.iron > resources.iron ) {
    return false;
  }

  if ( cost.gin && cost.gin > resources.gin ) {
    return false;
  }

  if (
    cost.crystals && cost.crystals > resources.crystals
  ) {
    return false;
  }
  return true;
}

export const purchaseImprovement = name => {
  return (dispatch, getState) => {
    const { 
      shop: {
        improvements
      },
      user: {
        resources
      }
    } = getState();

    const { cost } = R.find(
      R.propEq('name', name)
    )(improvements);

    if ( _compairCostToResources(cost, resources) ) {
      dispatch({
        type: PURCHASE_IMPROVEMENT,
        name
      });
      dispatch(reduceResources(cost))
    } else {
      dispatch(notifyUser(
        Strings.notifications.notEnoughResources)
      );
      dispatch(toggleShopModal);
    }
  };
};

const initialState = {
  improvements,
  isShopModalOpen: false,
};

export default function shopReducer(state = initialState, action) {
  switch (action.type) {
    case PURCHASE_IMPROVEMENT:
      return {
        ...state,
        improvements: state.improvements.map(el => {
          if (el.name === action.name){
            return {...el, isPurchased: true};
          }

          return el;
        })
      };
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