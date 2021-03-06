import R from 'ramda';
import {notifyUser} from './notificationsModule';
import {reduceResources, addItemToInventory} from '../user/userModule';
import Strings from '../utils/strings';
import improvements from '../utils/improvements';

const PURCHASE_IMPROVEMENT = '@shop/PURCHASE_IMPROVEMENT';
const PURCHASE_UPGRADE = '@shop/PURCHASE_UPGRADE';
const SELECT_ITEM = '@shop/SELECT_ITEM';
const TOGGLE_SHOP_MODAL = '@shop/TOGGLE_SHOP_MODAL';

const TOGGLE_UPGRADES_MODAL = '@shop/TOGGLE_UPGRADES_MODAL';
export const toggleShopModal = () => ({
  type: TOGGLE_SHOP_MODAL
});

export const toggleUpgradesModal = (upgradeCode) => ({
  type: TOGGLE_UPGRADES_MODAL,
  upgradeCode
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

const _checkResourcesAndPurchase = (dispatch, cost, resources) => {
  if ( _compairCostToResources(cost, resources) ) {
    dispatch(reduceResources(cost))
    return Promise.resolve()
  } else {
    dispatch(notifyUser(
      Strings.notifications.notEnoughResources)
    );
    return Promise.reject()
  }
};

export const purchaseItem = () => {
  return (dispatch, getState) => {
    const {
      user: {
        resources
      },
      shop: {
        selectedItem
      }
    } = getState();

    _checkResourcesAndPurchase(dispatch, selectedItem.cost, resources)
      .then(() => dispatch(addItemToInventory(selectedItem)));
  }
}

export const purchaseImprovement = code => {
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
      R.propEq('code', code)
    )(improvements);

    _checkResourcesAndPurchase(dispatch, cost, resources)
      .then(() => dispatch({
          type: PURCHASE_IMPROVEMENT,
          code
        }));
  };
};

export const selectItem = item => ({
  type: SELECT_ITEM,
  item
});

export const purchaseUpgrade = (improvementCode, upgradeCode) => {
  return (dispatch, getState) => {
    const { 
      shop: {
        improvements
      },
      user: {
        resources
      }
    } = getState();

    const {upgrades} = R.find(
      R.propEq('code', improvementCode)
    )(improvements);

    const {cost} = R.find(
      R.propEq('code', upgradeCode)
    )(upgrades);

    _checkResourcesAndPurchase(dispatch, cost, resources)
      .then(() => dispatch({
          type: PURCHASE_UPGRADE,
          improvementCode,
          upgradeCode
        }));
  }
}

const initialState = {
  improvements,
  isShopModalOpen: false,
  isUpgradesModalOpen: false,
  whichImprovementIsOpen: null,
  selectedItem: undefined
};

export default function shopReducer(state = initialState, action) {
  switch (action.type) {
    case PURCHASE_IMPROVEMENT:
      return {
        ...state,
        improvements: state.improvements.map(el => {
          if (el.code === action.code){
            return {...el, isPurchased: true};
          }

          return el;
        })
      };
    case PURCHASE_UPGRADE:
      const mapUpgrades = (upgrades, upgradeCode) =>
        upgrades.map(el => {
          if (el.code === upgradeCode) {
            return {
              ...el,
              isPurchased: true
            }
          }

          return el;
        });

      return {
        ...state,
        improvements: state.improvements.map(el => {
          if (el.code === action.improvementCode) {
            return {
              ...el,
              upgrades: mapUpgrades(
                el.upgrades,
                action.upgradeCode
              ),
              currentLvl: el.currentLvl + 1
            }
          }

          return el;
        })
      };
    case SELECT_ITEM:
      return {
        ...state,
        selectedItem: action.item
      }
    case TOGGLE_SHOP_MODAL:
      return {
        ...state,
        isShopModalOpen: !state.isShopModalOpen
      };
    case TOGGLE_UPGRADES_MODAL:
      return {
        ...state,
        isUpgradesModalOpen: !state.isUpgradesModalOpen,
        whichImprovementIsOpen: action.upgradeCode
      };
    default:
      return state;
  }
}

// DEV ACTIONS

export const __devGetAllImporvements = () => {
  return dispatch => {
    dispatch(purchaseImprovement('armory'));
    dispatch(purchaseImprovement('treasury'));
    dispatch(purchaseImprovement('science'));
    dispatch(purchaseImprovement('theives'));
    dispatch(purchaseImprovement('cellar'));
  }
}