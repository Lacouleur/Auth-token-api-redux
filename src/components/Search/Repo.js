import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Repo = ({ name, addFav, isFav }) => (
  <Card onClick={addFav} fluid color={isFav ? 'yellow' : 'blue'} header={name} />
);

Repo.propTypes = {
  name: PropTypes.string.isRequired,
  addFav: PropTypes.func.isRequired,
  isFav: PropTypes.bool.isRequired,
};

export default Repo;
