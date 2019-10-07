import React from 'react';
import { Segment, Header } from 'semantic-ui-react';

import Results from 'src/containers/Search/Results';
import InputSearch from 'src/containers/Search/InputSearch';

const Search = () => (
  <Segment as="main">
    <Header as="h2">Recherche</Header>
    <InputSearch />
    <Results />
  </Segment>
);

export default Search;
