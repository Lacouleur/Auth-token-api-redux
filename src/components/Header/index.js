import React from 'react';
import Nav from './Nav';


import {
  Segment,
  Header as HeaderSemanticUi,
  Icon,
} from 'semantic-ui-react';

const Header = () => (
  <Segment as="header" inverted>
    <HeaderSemanticUi textAlign="center" as="h1" icon inverted>
      <Icon name="github alternate" />
      Github challenge
      <HeaderSemanticUi.Subheader>
        Find your favorites repositories
      </HeaderSemanticUi.Subheader>
    </HeaderSemanticUi>
    <Nav />
  </Segment>
);

export default Header;