import React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';


const InputSearch = () => (
  <Segment>
    <Form>
      <Form.Field>
        <input placeholder="Recherche" />
      </Form.Field>
      <Button type="submit">Go</Button>
    </Form>
  </Segment>
);

export default InputSearch;