import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import store, {persistor} from '../store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import AuthorizedUserStack from './stack/AuthorizedUserStack';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AuthorizedUserStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
