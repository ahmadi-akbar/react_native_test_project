import React, {PureComponent} from 'react';
import {Provider} from 'react-redux';

import AppNavigator from './AppNavigator';
import store from './actions/store';

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
