
// == Import : npm
import React from 'react';
import { Button, Form as FormSemanticUi, Segment } from 'semantic-ui-react';

// == Import : local


// == Composant
const Form = () => (
  <Segment as="main">
    <FormSemanticUi>
      <FormSemanticUi.Field>
        <input placeholder="Veuillez saisir votre token github" />
      </FormSemanticUi.Field>
      <Button type="submit">Valider</Button>
    </FormSemanticUi>
  </Segment>
);

// == Export
export default Form;