// - initialState
import reposList from 'src/data/repos';

const initialState = {
  repos: reposList.items,
  favoris: [],
};

// - Actions Types
const ADD_FAV = 'ADD_FAV';

// - Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        favoris: [
          ...state.favoris,
          action.id,
        ],
      };
    default:
      return state;
  }
};

// - Actions Creators
export const addFav = (id) => ({
  type: ADD_FAV,
  id,
});

// - Selectors
export const isFav = (repos, id) => repos.includes(id);

// - Export
export default reducer;
