import React from 'react'
import { View, Text } from 'react-native'

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'purple' }}>
      <Text style={{ color: '#fff', fontSize:'2em'}}>Home Screen</Text>
    </View>
  );
}