// ici je vais trouver le reducer parent dans lequel je vais combiner mes reducers

// redux fourni une fonction combineReducers qui combine plusieurs reducer en 1
import { combineReducers } from 'redux';

// on importe chacun des sous-reducers
import user from './user';
import repos from './repos';
import form from './form';

// combineReducers nous retourne le reducer parent généré
// on doit fournir en paramètre un objet
// avec en clé un nom donné à chaque reducer et en valeur, chaque fonction reducer
const reducer = combineReducers({
  // user: user
  user,
  repos,
  form,
});

export default reducer;