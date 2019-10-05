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
    <Page />
  </Container>
);


// == Export
export default App;
