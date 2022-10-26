import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Route from './src/navigation/Route';

const App = () => {
  return (
    <NavigationContainer>
      {/* <SafeAreaView> */}
      <Route />
      {/* </SafeAreaView> */}
    </NavigationContainer>
  );
};

export default App;
