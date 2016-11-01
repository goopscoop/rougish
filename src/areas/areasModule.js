const CHANGE_AREA = '@areas/CHANGE_AREA';

// Areas

export const MAIN_MAP = '@areas/MAIN_MAP';
export const BASE = '@areas/BASE';
export const BATTLE_AREA = '@areas/BATTLE_AREA';

export const changeArea = (newArea) => ({
  type: CHANGE_AREA,
  newArea
});

const initialState = {
  currentArea: MAIN_MAP,
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
    default:
      return state;
  }
}