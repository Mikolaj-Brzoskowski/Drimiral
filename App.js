import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react'
import Navigation from './Navigation';

const App = props => {
  
  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation/>
        </PersistGate>
      </Provider>
  );
}

export default App;