import React from 'react';
import PropTypes from 'prop-types';
import {
  Segment, Header, Image, Button,
} from 'semantic-ui-react';

const Welcome = ({ avatar, name }) => (
  <Segment as="main">
    <Header as="h2">
      Bienvenue
      <Button color="yellow" floated="right">Déconnexion</Button>
    </Header>
    <Header as="h3">
      <Image circular src={avatar} /> {name}
     </Header>
  </Segment>
);

Welcome.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Welcome;