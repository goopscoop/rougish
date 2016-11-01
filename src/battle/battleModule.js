import * as e from '../utils/enemies';
import {character} from '../utils/characterConstructors';

const impy = e.ghost(character({}))

const initialState = {
  activeEnemies: [impy, impy, impy, impy, impy]
};

export default function battleModule(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}