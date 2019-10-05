import axios from 'axios';

import { CONNECT_USER } from 'src/store/reducer/form';
import { saveUser } from 'src/store/reducer/user';

const ajaxMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CONNECT_USER: {
      const state = store.getState();
      const token = state.form.tokenInput;

      /* ici on veut intérroger une route privée, c'est à dire une url de notre api qui nécessite 
      * un niveau d'accès sufffisant, n'importe qui ne pourra pas lire les infos de mon compte
      * pour dire qui je suis, j'ai récupéré un token, c'est une chaine de caractères qui permet au 
      * serveur back de me reconnaitre, quand je fais une fais un requete au serveur, je peux lui 
      *trnasmettre ce token, cette carte d'identité.
      * pour cela ici avec l'api github on a due transmettre le token via les entêtes de la requetes
      */

      axios.get('https://api.github.com/user', {
        headers: {
          Authorization: `token ${token}`,
        },
      })
        .then((response) => {
          const actionSaveUser = saveUser(
            response.data.login,
            response.data.avatar_url,
          );
          store.dispatch(actionSaveUser);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {

        });
      break;
    }
    default:
      next(action);
  }
};

export default ajaxMiddleware;