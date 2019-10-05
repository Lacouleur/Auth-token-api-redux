import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Nav = ({ logged }) => (
  // les composants semantic ui peuvent être rendus en tant qu'un élement spécifique
  // par exemple <Segment as="section">
  // on peut aller plus loin en faisant le rendu en tant qu'un autre composant
  // par exemple <Menu.Item as={NavLink}>
  // l'avantage est qu'on garde le comportement du composant semantic (cad les styles)
  // + les comportements du composant associé (par exemple ici NavLink > la gestion d'une classe active et le changement d'url au clic)
  // les props transmises au composant semantic ui seront retransmises au composant associé
  <Menu color="blue" inverted>
    <Menu.Item as={NavLink} exact to="/">
      Accueil
    </Menu.Item>

    <Menu.Item as={NavLink} exact to="/about">
      À propos
    </Menu.Item>

    {logged && (
      <Menu.Item as={NavLink} exact to="/search">
        Recherche
      </Menu.Item>
    )}
  </Menu>
);

Nav.propTypes = {
  logged: PropTypes.bool.isRequired,
};

export default Nav;
