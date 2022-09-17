import React from 'react';
import { Route, Routes, Navigate } from 'react-router';

import SignUp from './components/SignUp';
import Login from './components/Login';

function App () {
  return (
    <div>
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/' element={<Navigate  to='/SignUp'  />} />
      </Routes>
    </div>
  );
};

export default App;