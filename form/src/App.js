import React from 'react';
import { Route, Routes } from 'react-router';

import SignUp from './components/SignUp';
import Login from './components/Login';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/Login' elemet={<Login />} />
        <Route path='/SignUp' elemet={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;