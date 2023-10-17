import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Fab } from '../components/Fab'

export const CounterScreen = () => {
    const [counter, setCounter] = useState(0)

  return (
    <View style={styles.container}>
        <View style={styles.circle}>
            <Text style={styles.title}>
                Contador: 
            </Text>
            <Text style={styles.result}>{counter}</Text>
        </View>
        <Fab
        title='+1'
        onPress={() => setCounter(counter + 1)}
        />
        <Fab
        title='-1'
        onPress={() => setCounter(counter - 1)}
        position='bl'
        />
        
       {/*  <TouchableOpacity
         onPress={() => setCounter(counter - 1)}
         style={styles.fabLocationBL}>
            <View style={styles.fab}>
                <Text style={styles.fabText}>-1</Text>
            </View>
        </TouchableOpacity> */}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffff66'
    },
    circle:{
        backgroundColor: '#33ccff',
        justifyContent: 'center',
        width: 300,
        height: 300,
        borderRadius: 300,
        borderColor: '#ccff66',
        borderWidth: 2,
        
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        top: -10,
        fontStyle: 'italic',
        color: '#ffff'
    },
    result: {
        fontSize: 80,
        fontWeight: 'bold',
        color: '#0000cc',
        textAlign: 'center'
    }
    
})
