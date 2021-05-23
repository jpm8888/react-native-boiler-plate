import * as React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux_store/store';
import ColorTheme from './src/base/ColorTheme';
import {RouteManager} from './src/routes/RouteManager';

function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar backgroundColor={ColorTheme.primaryLight} />
        <RouteManager />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorTheme.background,
  },
});

export default App;
