import R from 'ramda';
import * as e from '../utils/enemies';
import {character} from '../utils/characterConstructors';

const PLAYER = '@battle/PLAYER';
const ENEMY = '@battle/ENEMY';
const GENERATE_BATTLE_ORDER = '@battle/GENERATE_BATTLE_ORDER';
const NEXT_TURN = '@battle/NEXT_TURN';

const impy = () => e.ghost(character({name: 'impy', imgName: 'Ghost'}));

export const generateBattleOrder = () => {
  return (dispatch, getState) => {
    const {
      chars: {
        activePCs
      },
      battle: {
        activeEnemies
      }
    } = getState();

    const sortByInitiative = R.sortBy(R.prop('secondaryStats.initiative'));
    const allChars = [...activePCs, ...activeEnemies];
    const battleOrder = sortByInitiative(allChars)
    
    dispatch({
      type: GENERATE_BATTLE_ORDER,
      battleOrder
    })
  }
}

export const nextTurn = () => ({
  type: NEXT_TURN
})


const initialState = {
  activeEnemies: [impy(), impy(), impy(), impy(), impy()],
  battleOrder: [],
  activeCharIndex: 0,
  activeChar: null
};

const updateActiveCharIndex = (currentIndex, charCount) => {
  // if the current index === number of chars, return 0, else +1
  return charCount - 1 === currentIndex ? 0 : currentIndex + 1;
}

const getActiveChar = (index, battleOrder) => {
  return battleOrder[index];
}

export default function battleModule(state = initialState, action) {
  switch (action.type) {
    case GENERATE_BATTLE_ORDER:
      return {
        ...state,
        battleOrder: action.battleOrder
      }
    case NEXT_TURN:
      const activeCharIndex = updateActiveCharIndex(state.activeCharIndex, state.battleOrder.length);
      return {
        ...state,
        activeCharIndex,
        activeChar: getActiveChar(activeCharIndex, state.battleOrder)
      }
    default:
      return state;
  }
}