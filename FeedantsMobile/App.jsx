import './global.css';
import './src/i18n';
import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import store from './src/store/store';
import MainScreen from './src/screens/MainScreen';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" backgroundColor="#F4F8F8" />
        <MainScreen />
      </SafeAreaProvider>
    </Provider>
  );
}
