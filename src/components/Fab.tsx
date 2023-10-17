import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, View, Platform, TouchableOpacity } from 'react-native'


interface Props {
    title: string,
    position?: 'bl' | 'br',
    onPress: () => void,
}


export const Fab = ({title, position = 'br', onPress}: Props) => {

    const ios = () => {
        return(
            <TouchableOpacity 
            activeOpacity={0.8}
            onPress={onPress}
            style={[styles.fabLocation,
                (position === 'br') ? styles.right : styles.left
            ]}>
               <View style={styles.fab}>
                    <Text style={styles.fabText}>{title}</Text>
                </View>
            </TouchableOpacity>
        )

    }

    const android = () => {
        return (
            <View style={[styles.fabLocation,
                (position === 'br') ? styles.right : styles.left
            ]}>
                <TouchableNativeFeedback
                onPress={onPress}
                background={TouchableNativeFeedback.Ripple('#33ccff', false, 30)}
                >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>{title}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
        
    }

  return (Platform.OS === 'android') ? android() : ios()
  
}

const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 25,
    },
    right: {
        right: 25
    },
    left: {
        left: 25
    },
    fab: {
        justifyContent: 'center',
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 11,
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})
