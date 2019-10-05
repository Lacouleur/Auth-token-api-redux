import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

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
    <Route path="/" exact>
        <Welcome />
    </Route>
    <Route path="/about" exact>
        <About />
    </Route>
    <Route path="/search" exact>
        <Search />
    </Route>
    </>
  )}

  </div>
);

Page.propTypes = {
    logged: PropTypes.bool.isRequired,
  };

export default Page;