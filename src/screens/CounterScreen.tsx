import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Fab } from '../components/Fab'

export const CounterScreen = () => {
    const [counter, setCounter] = useState(10)

  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Contador: {counter}
        </Text>
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
        justifyContent: 'center'
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        top: -10
    },
    
})
