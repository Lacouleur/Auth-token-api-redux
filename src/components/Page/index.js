import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch } from 'react-router-dom';

import Form from 'src/containers/Form';
import Welcome from 'src/containers/Welcome';
import About from 'src/components/About';
import Search from 'src/components/Search';

const Page = ({ logged }) => (
    <Switch>

        <Route path="/" exact>
            {!logged && <Form />}
            {logged && <Welcome />}
        </Route>
        <Route path="/about" exact>
            <About />
        </Route>

    {logged && (
        <Route path="/search" exact>
            <Search />
        </Route>
        )}
    {!logged && <Redirect to="/" />}

    {logged && (
        <Route>
            <div>Page non trouvée</div>
        </Route>
    )}
  </Switch>
);

Page.propTypes = {
    logged: PropTypes.bool.isRequired,
  };

export default Page;