/** #############################

 ->  plan d'action <-
 * x inté statique
 * x premières props statique
 * O gérer les routes
 * - gérer la connexion
 * - gérer la recherche
 * 

#############################*/

// == Import : npm
import React from 'react';
import { Container } from 'semantic-ui-react';

// == Import : local
import Header from 'src/components/Header';
import Page from 'src/components/Page';

// == Composant
const App = () => (
  <Container>
    <Header />
    <Page logged={false}/>
  </Container>
);


// == Export
export default App;
