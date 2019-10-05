import React from 'react';
import { Menu } from 'semantic-ui-react';

const Nav = () => (
  <Menu color="yellow" inverted>
    <Menu.Item active>
      Accueil
    </Menu.Item>

    <Menu.Item>
      À propos
    </Menu.Item>

    <Menu.Item>
      Recherche
    </Menu.Item>
  </Menu>
);

export default Nav;