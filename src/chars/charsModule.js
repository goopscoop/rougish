import * as c from '../utils/characterConstructors';

const jo = c.scuttler(c.character({
  name: 'Jo',
  hp: 20
}))

const initialState = {
  allPCs: [jo],
  activePCs: [jo, jo, jo, jo, jo]
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}