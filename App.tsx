import React from 'react';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
import { CounterScreen } from './src/screens/CounterScreen';
import { StatusBar } from 'react-native';

export const App = () => {
  return (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#33ccff" />
   <CounterScreen/>
  </>
  )
}