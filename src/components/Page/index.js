import React from 'react';
import PropTypes from 'prop-types';

import Form from 'src/components/Form';
import Welcome from 'src/components/Welcome';
import About from 'src/components/About';
import Search from 'src/components/Search';

const Page = ({ logged }) => (
  <div>

  {!logged && (
    <Form />
  )}
  {logged && (
    <>
      <Welcome />
      <About />
      <Search />
    </>
  )}

  </div>
);

Page.propTypes = {
    logged: PropTypes.bool.isRequired,
  };

export default Page;