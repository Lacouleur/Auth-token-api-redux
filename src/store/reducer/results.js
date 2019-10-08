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
            reposFromAxiosResponse : [
              
              action.id, 
              action.url, 
              action.name,
              action.description,
              action.owner
              
            ]
        };

        default:
          return state;
    };
  };
  
  // - Actions Creators
  
  export const getReposFromAxios = (id, url, name, description, owner) => ({
    type: GET_REPOS_FROM_AXIOS, 
    id,
    url,
    name,
    description,
    owner, //object
  
  })
  
  // - Selectors
  export const isFav = (repos, id) => repos.includes(id);
  
  // - Export
  export default reducer;