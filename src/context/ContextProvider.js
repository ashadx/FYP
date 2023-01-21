import React from 'react';

import AuthContextProvider from './AuthContext';
import AddLabsContextProvider from './AddLabsContext';

const ContextProvider = ({children}) => {
  return (
    <AuthContextProvider>
      <AddLabsContextProvider>{children}</AddLabsContextProvider>
    </AuthContextProvider>
  );
};

export default ContextProvider;
