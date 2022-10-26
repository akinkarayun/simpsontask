import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Route from './src/navigation/Route';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
