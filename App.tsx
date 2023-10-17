import React from 'react';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
// import { CounterScreen } from './src/screens/CounterScreen';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { PositionScreen } from './src/screens/PositionScreen';

export const App = () => {
  return (
 
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#33ccff" />
      <PositionScreen/>
    </SafeAreaView>
  
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    }
});