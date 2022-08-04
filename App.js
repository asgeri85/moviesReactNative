import React from 'react';
import AppNavigationContainer from './src/navigation/AppNavigationContainer';
import UserProvider from './src/redux/Provider';

const App = () => {
  return (
    <UserProvider>
      <AppNavigationContainer />
    </UserProvider>
  );
};

export default App;
