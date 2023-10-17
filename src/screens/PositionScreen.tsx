import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BoxObjectModelScreen } from './BoxObjectModelScreen';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.cajaVerde}/>
        <View style={styles.cajaMorada}/>
        <View style={styles.cajaNaranja}/>

        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 400,
        width: 410,
        backgroundColor: '#28C4D9'
    },
    cajaMorada: {
        backgroundColor: '#5856D6',
        borderColor: 'white',
        width: 100,
        height: 100,
        borderWidth: 10,
        position: 'absolute',
        top: 0,
        right: 0        
    },
    cajaNaranja: {
        backgroundColor: '#F0A23B',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    cajaVerde: {
        backgroundColor: 'green',
        //width: 100,
        //height: 100,
        borderWidth: 10,
        borderColor: 'white',
        /* position: 'absolute',
        bottom: 0,
        left: 0,
        top: 0,
        right: 0 */
        ...StyleSheet.absoluteFillObject // Hace lo mismo que lo comentado anteriormente
    }
});
