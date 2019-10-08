import PropTypes from 'prop-types';
import React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';

// token : 63535622ff913a1c37312859b1be50666de3008e
// je suis la !

class InputSearch  extends React.Component {
    // est déclenché quand le rendu dans le dom réel de ce composant est fait
    componentDidMount() {
      // console.log('le composant est monté, le dom réel généré');
      // cibler l'input dans le dom réel et le focus
      // cDM a lieu après render, j'ai donc accès aux ref
      this.inputElement.focus();
    }
  
    
  
    render() {
      // dans un composant sous forme de classe on accède aux props via this.props
      const { inputValue, handleInput, handleSubmit /*, loadingStatus*/ } = this.props;
      console.log(handleInput);

     const handleChange = (event) => {
        //console.log("consoleLOG de event.target.value : ", event.target.value);
        const { value } = event.target;
        handleInput(value);
      }

      return (
        <Segment inverted>
          <Form onSubmit={handleSubmit} >
            <Form.Field>
              <input
                // loading={true}
                icon="search"
                // ref permet de mémoriser un élement du dom réel
                // au render react/react-dom transpose le jsx vers du dom réel
                // à ce moment la ref est mise de côté, la référence à l'élement dans le dom réel
                // tout ce qui a lieu après le render a accès à la ref, typiquement cDM, cDU
                // la fonction associée à ref sera executée au moment du render, elle prend en paramètre l'élement du dom réel, je peux alors le mettre de côté
                ref={(inputDuDomReel) => {
                  // je déclare une propriété à ma classe que j'appele ici inputElement
                  // je lui donne comme valeur l'élement du dom réel
                  this.inputElement = inputDuDomReel;
                }}
                onChange={handleChange}
                value={inputValue}
                placeholder="Recherche..."
              />
            </Form.Field>
            <Button type="submit">Go</Button>
          </Form>
        </Segment>
      );
    }
  }
  
  InputSearch.propTypes = {
    // handleSubmit: PropTypes.func.isRequired,
    // changeValue: PropTypes.func.isRequired,
    // loadingStatus: PropTypes.bool.isRequired,
   inputValue: PropTypes.string.isRequired,
  };

export default InputSearch ;