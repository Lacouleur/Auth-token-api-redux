import axios from 'axios';

import { CONNECT_USER } from 'src/store/reducer/form';
import { SEARCH_REPOS } from 'src/store/reducer/InputSearch';
import { saveUser } from 'src/store/reducer/user';
import { getReposFromAxios} from 'src/store/reducer/results'

// token : 63535622ff913a1c37312859b1be50666de3008e
/*
X 1 - On envoi la requete "SEARCH_REPOS" depuis le reducer InputSearch
X 2 - On fait une requête Axios dans le middleware
X 3 - On récupère la réponse d'axios dans le reducer repos.js 
X  4- l'action getReposFromAxios définit un state
5- On recupère ce state dans le container de Results.js
6- on prend la props, et on l'utilise dans le component Results.js
7 - On envoi les Repo en OwnProps à Repo.js (et on map pour affiche)


*/

const ajaxMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SEARCH_REPOS: {
      console.log(action);
      const state = store.getState();
      const repoToSearch = state.InputSearch.inputValue
      console.log(repoToSearch);
      
      axios.get(`https://api.github.com/search/repositories?q=${repoToSearch}`)
        .then((response) => {
          // console.log(response);
          const lightItems = response.data.items.map((repo) => ({
              id: repo.id,
              url: repo.url,
              name: repo.name,
              description: repo.description,
              owner: {
                login: repo.owner.login,
                avatar_url: repo.owner.avatar_url,
              },
            }));
            console.log(lightItems);
            const reposSearch = getReposFromAxios(lightItems);
            store.dispatch(reposSearch);
        });
      next(action);
    }

    case CONNECT_USER: {
      const state = store.getState();
      const token = state.form.tokenInput;
      // ici on veut intérroger une route privée, c'est à dire une url de notre api qui nécessite un niveau d'accès sufffisant, n'importe qui ne pourra pas lire les infos de mon compte
      // pour dire qui je suis, j'ai récupéré un token, c'est une chaine de caractères qui permet au serveur back de me reconnaitre, quand je fais une fais un requete au serveur, je peux lui trnasmettre ce token, cette carte d'identité
      // pour cela ici avec l'api github on a du transmettre le token via les entêtes de la requetes
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


      /* 1- Envoyer l'infos vers Repos.js
      * 2- Recevoir l'info dans Repos.js
      *  2-a Pour le moment on a les infos en dure. 
      * 3- Etablir connexion Axios.
      */

      // axios.get(`https://api.github.com/search/repositories?q=${inputValue}`)
      //   .then((response) => {
      //     // récupérer la réponse
      //     // console.log(response);
      //     // afficher la liste des repos
      //     // j'ai une seule source de vérité : le state, je vais mettre la liste de repo dans le state
      //     // il y aura un nouveau cycle de rendu, le state sera lu à nouveau dans render et les props redistrubuées
      //     if (response.data.items.length > 0) {
      //       const lightItems = response.data.items.map((repo) => ({
      //         id: repo.id,
      //         url: repo.url,
      //         name: repo.name,
      //         description: repo.description,
      //         owner: {
      //           login: repo.owner.login,
      //           avatar_url: repo.owner.avatar_url,
      //         },
      //       }));
      //       this.setState({
      //         repos: lightItems,
      //         hasError: false,
      //         info: `${response.data.items.length} premiers résultats de la recherche`,
      //       });
      //     }
      //     else {
      //       this.setState({
      //         hasError: true,
      //         info: 'La recherche n\'a pas donnée de résultat',
      //       });
      //     }
      //   })
      //   .catch((error) => {
      //     // console.log(error);
      //     // handle error
      //     // modifier la donnée erreur du state
      //     this.setState({
      //       hasError: true,
      //       info: 'Recherche invalide',
      //     });
      //   })
      //   .finally(() => {
      //     // indiquer qu'on ne charge plus
      //     // this.setState({
      //     //   loading: false,
      //     // });
      //   });