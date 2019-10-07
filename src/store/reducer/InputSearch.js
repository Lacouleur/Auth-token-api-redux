// - initialState
// token : 63535622ff913a1c37312859b1be50666de3008e
const initialState = {
  inputValue: '',
  loading : true,
};

// - Actions Types
const CHANGE_VALUE = 'CHANGE_VALUE';


// - Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        inputValue : action.value,
      };
    default:
      return state;
  }
};

// - Actions Creators
export const changeValue = (value) => ({
  type: CHANGE_VALUE,
  value,
});


// - Export
export default reducer;
