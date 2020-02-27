import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Feed from './pages/Feed'
import New from './pages/New'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = { { color : '#fff'} }>Hi brow let´s code!</Text>
      <Feed></Feed>
      <New></New>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
