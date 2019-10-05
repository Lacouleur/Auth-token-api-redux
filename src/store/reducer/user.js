// - initialState
const initialState = {
  username: '',
  avatar: '',
  logged: false,
};

// - Actions Types
const SAVE_USER = 'SAVE_USER';

// - Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER:
      return {
        ...state,
        username: action.username,
        avatar: action.avatar,
        logged: true,
      };
    default:
      return state;
  }
};

// - Actions Creators
export const saveUser = (username, avatar) => ({
  type: SAVE_USER,
  username,
  avatar,
});

// - Selectors

// - Export
export default reducer;
