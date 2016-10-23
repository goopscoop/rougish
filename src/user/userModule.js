const ADD_RESOURCE = '@user/ADD_RESOURCE';
const REDUCE_RESOURCES = '@user/REDUCE_RESOURCE';

const initialState = {
  resources: {
    gold: 0,
    iron: 0,
    gin: 0,
    crystals: 0
  }
};

export const addResource = (resourceType, amount) => ({
  type: ADD_RESOURCE,
  resourceType,
  amount
});

export const reduceResources = resources => ({
  type: REDUCE_RESOURCES,
  resources
})

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_RESOURCE:
      return {
        ...state,
        resources: {
          ...state.resources,
          [action.resourceType]: 
            state.resources[action.resourceType] + action.amount
        }
      };
    case REDUCE_RESOURCES:
      return {
        ...state,
        resources: {
          gold: action.resources.gold ? state.resources.gold - action.resources.gold : state.resources.gold,
          iron: action.resources.iron ? state.resources.iron - action.resources.iron : state.resources.iron,
          crystals: action.resources.crystals ? state.resources.crystals - action.resources.crystals : state.resources.crystals,
          gin: action.resources.gin ? state.resources.gin - action.resources.gin : state.resources.gin,
        }
      }
    default:
      return state;
  }
}