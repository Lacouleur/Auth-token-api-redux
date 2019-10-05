import React from 'react';
import { Segment, Header } from 'semantic-ui-react';

import InputSearch from './InputSearch';
import Results from './Results';

const Search = () => (
  <Segment as="main">
    <Header as="h2">Recherche</Header>
    <InputSearch />
    <Results />
  </Segment>
);

export default Search;