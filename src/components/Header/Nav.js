import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Nav = ({ logged }) => (
  <Menu color="yellow" inverted>
    <Menu.Item as={NavLink} exact to="/">
      Accueil
    </Menu.Item>

    <Menu.Item as={NavLink} exact to="/about">
    À propos
    </Menu.Item>

    {logged && (
        // on ne peut pas spécifier des élements jsx voisins directement, il faut un parent
        // ici on met un fragment, comme ça il n'y a pas d'impact dans le dom réel
        <>
        <Menu.Item as={NavLink} exact to="/search">
            Recherche
        </Menu.Item>
        </>
      )}
  </Menu>
);

Nav.propTypes = {
    logged: PropTypes.bool.isRequired,
  };
  

export default Nav;