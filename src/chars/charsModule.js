import * as c from '../utils/characterConstructors';

const createJoe = () => c.scuttler(c.character({
  name: 'Joe',
  hp: 20,
  imgName: 'Swordman'
}));


const initialState = {
  allPCs: [createJoe()],
  activePCs: [createJoe(), createJoe(), createJoe(), createJoe(), createJoe()]
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}