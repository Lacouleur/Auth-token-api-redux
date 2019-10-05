import React from 'react';
import { Segment, Image, Header } from 'semantic-ui-react';

const About = () => (
  <Segment as="main">
    <Header as="h2">À propos</Header>
    <Segment>
      <Image
        src="https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
      />
    </Segment>
    <Segment>
      <Header as="h3">Lorem ipsum dolor sit amet.</Header>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat debitis tenetur magnam, sequi velit dolores aliquid et! Laborum quaerat nostrum eaque, quae iusto expedita dolorem odio? Numquam labore voluptas ullam similique nobis illo, cum voluptatem, quam molestias, pariatur dolorem iure minus veritatis. Quod ipsa consectetur impedit sunt eum amet explicabo?</p>
    </Segment>
  </Segment>
);

export default About;