import React from 'react';
import {Provider} from 'react-redux';
import intialState from './store';
import reducers from './reducers';
import {createStore} from 'redux';

const UserProvider = ({children}) => {
  const store = createStore(reducers, intialState);

  return <Provider store={store}>{children}</Provider>;
};

export default UserProvider;
