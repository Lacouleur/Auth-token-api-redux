// == Import : npm
import React from 'react';
import { Container } from 'semantic-ui-react';

// == Import : local
import Header from 'src/components/Header';
import Page from 'src/containers/Page';

/**
 * plan d'action
 * x inté statique
 * x premières props statique
 * x gérer les routes
 * x changement : la route /about doit être accessible même déconnecté
 * - gérer la connexion
 * - gérer la recherche
 * 
 */

// == Composant
const App = () => (
  <Container>
    <Header />
    <Page />
  </Container>
);

// == Export
export default App;
