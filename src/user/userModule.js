const ADD_RESOURCE = '@user/ADD_RESOURCE';
const REDUCE_RESOURCES = '@user/REDUCE_RESOURCE';
const ADD_ITEM_TO_INVENTORY = '@user/ADD_ITEM_TO_INVENTORY';

export const addItemToInventory = item => ({
  type: ADD_ITEM_TO_INVENTORY,
  item
});

export const addResource = (resourceType, amount) => ({
  type: ADD_RESOURCE,
  resourceType,
  amount
});

export const reduceResources = resources => ({
  type: REDUCE_RESOURCES,
  resources
})

const initialState = {
  resources: {
    gold: 100000,
    iron: 100000,
    gin: 100000,
    crystals: 100000
  },
  inventory: []
};

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
    case ADD_ITEM_TO_INVENTORY:
      return {
        ...state,
        inventory: [action.item, ...state.inventory]
      }
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