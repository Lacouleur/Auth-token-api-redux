
// == Import : npm
import React from 'react';
import { Button, Form as FormSemanticUi, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

// == Import : local


// == Composant
const Form = ({ tokenValue, changeValue, submitToken }) => {
    const handleChange = (event) => {
      const { value } = event.target;
      changeValue(value);
    };
    return (
      <Segment as="main">
        <FormSemanticUi onSubmit={submitToken}>
          <FormSemanticUi.Field>
            <input onChange={handleChange} value={tokenValue} placeholder="Veuillez saisir votre token github" />
          </FormSemanticUi.Field>
          <Button type="submit">Valider</Button>
        </FormSemanticUi>
      </Segment>
    );
  };
  
  Form.propTypes = {
    tokenValue: PropTypes.string.isRequired,
    changeValue: PropTypes.func.isRequired,
    submitToken: PropTypes.func.isRequired,
  };

// == Export
export default Form;