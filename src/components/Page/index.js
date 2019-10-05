import React from 'react';

import Form from 'src/components/Form';
import Welcome from 'src/components/Welcome';
import About from 'src/components/About';
import Search from 'src/components/Search';

const Page = () => (
  <div>
    <Form />
    <Welcome />
    <About />
    <Search />
    {/* 
    --- Utilisateur anonyme ---
    <div>Form</div>
    --- Utilisateur reconnue ---
    <div>Welcome</div>
    <div>About</div>
    <div>Search</div>
    */}
  </div>
);

export default Page;