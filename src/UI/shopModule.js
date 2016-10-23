import improvements from '../utils/improvements';
import R from 'ramda';

const PURCHASE_IMPROVEMENT = '@shop/PURCHASE_IMPROVEMENT';

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
    }

  };
}

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
}

const initialState = {
  improvements
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
      }
    default:
      return state;
  }
}