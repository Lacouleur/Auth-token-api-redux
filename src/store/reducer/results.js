// - initialState
const initialState = {
    reposFromAxiosResponse : []
 };

// - Actions Types
  const GET_REPOS_FROM_AXIOS = 'GET_REPOS_FROM_AXIOS'

  // Reducer

  // - Reducer
const reducer = (state = initialState, action = {}) => {
    switch (action.type) {

        case GET_REPOS_FROM_AXIOS :
          return {
            ...state,
            // toto: 'labiteapapa',
            reposFromAxiosResponse : action.lightItems,
        };

        default:
          return state;
    };
  };
  
  // - Actions Creators
  
  export const getReposFromAxios = (lightItems) => ({
    type: GET_REPOS_FROM_AXIOS, 
   lightItems
  
  })
  
  // - Selectors
  export const isFav = (repos, id) => repos.includes(id);
  
  // - Export
  export default reducer;