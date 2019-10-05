import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <Menu color="yellow" inverted>
    <Menu.Item as={NavLink} exact to="/">
      Accueil
    </Menu.Item>

    <Menu.Item as={NavLink} exact to="/about">
      À propos
    </Menu.Item>

    <Menu.Item as={NavLink} exact to="/search">
      Recherche
    </Menu.Item>
  </Menu>
);

export default Nav;