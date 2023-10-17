import React from 'react'
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { Dimensions } from 'react-native'

//const {width, height} = Dimensions.get('window')

export const DimensionesScreens = () => {
    const {width, height} = useWindowDimensions()

  return (
    <View>
        <View style={styles.container}>
            <View style={{
                ...styles.cajaMorada,
                width: width * 0.50}}/>
            <View style={styles.cajaNaranja}/>
        </View>
        <Text style={styles.title}>W: {Math.round(width)}, H: {Math.round(height)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: 200,
      backgroundColor: 'red'  
    },
    cajaMorada: {
        backgroundColor: '#5856d6',
        width: '50%',
        height: '50%'
    },
    cajaNaranja: {
        backgroundColor: '#F0A23B',
        width: '50%',
        height: '50%'
    },
    title: {
        fontSize: 20,
        textAlign: 'center'
    }
});