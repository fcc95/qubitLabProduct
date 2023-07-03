import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './store';
import Navigation from './navigation/Navigation';
import {Colors} from './utilities/colors';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.black} />
      <Navigation />
    </Provider>
  );
}

export default App;
