import React from 'react';
import {
  Segment, Header, Image, Button,
} from 'semantic-ui-react';

const Welcome = () => (
  <Segment as="main">
    <Header as="h2">
      Bienvenue
      <Button color="yellow" floated="right">Déconnexion</Button>
    </Header>
    <Header as="h3">
      <Image circular src="https://images.pexels.com/photos/2103864/pexels-photo-2103864.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" /> alexisOclock
    </Header>
  </Segment>
);

export default Welcome;