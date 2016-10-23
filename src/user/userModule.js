const initialState = {
  resources: {
    gold: 0,
    iron: 0,
    gin: 0,
    crystals: 0
  }
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}