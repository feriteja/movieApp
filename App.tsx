import React, {useEffect} from 'react';
import {LogBox, StyleSheet, Text, View} from 'react-native';
import Router from './src/config/router/router';

const App = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
    <View style={{flex: 1}}>
      <Router />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
