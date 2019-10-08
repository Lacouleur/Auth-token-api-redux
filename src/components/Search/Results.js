import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import Repo from 'src/containers/Search/Repo';

const Results = ({ repos }) => {

  console.log('TAAAAAAAH : ', repos);


    return (
      <Card.Group centered>
        {repos.map((repo) => (
          <Repo {...repo} key={repo.id} />
        ))}
      </Card.Group>
    );
}

Results.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Results;
