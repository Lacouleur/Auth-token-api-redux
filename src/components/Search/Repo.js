import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Repo = ({description, name, owner, url, addFav, isFav }) => {
  console.log(name)
  return (

    <Card color={isFav ? 'yellow' : 'blue'} onClick={addFav} >
    <Image src={owner.avatar_url} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Description>
        {description}
        <a>{url}</a>
      </Card.Description>
    </Card.Content>
  </Card>
  );
};

Repo.propTypes = {
  name: PropTypes.string.isRequired,
  addFav: PropTypes.func.isRequired,
  isFav: PropTypes.bool.isRequired,
};

export default Repo;


// id: repo.id,
// url: repo.url,
// name: repo.name,
// description: repo.description,
// owner: {
//   login: repo.owner.login,
//   avatar_url: repo.owner.avatar_url,
// },

// .cards {

//   display : flexbox;
//   flex-wrap: wrap;
//   width:100%;
//   justify-content : space-evenly;

// }