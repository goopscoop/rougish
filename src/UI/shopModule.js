import improvements from '../utils/improvements';

const PURCHASE_IMPROVEMENT = '@shop/PURCHASE_IMPROVEMENT';

export const purchaseImprovement = (name) => ({
  type: PURCHASE_IMPROVEMENT,
  name
});

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