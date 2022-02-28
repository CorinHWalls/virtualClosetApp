import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


export default function Box() {
  return (
   
      <View style={styles.box}>
    <View style={styles.inner}>
        <Text>Box</Text>
    </View>
      </View>

  )
}

const styles = StyleSheet.create({
    boxContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "red",
        padding: 5,
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
    box: {
        width: 150,
        height: 150,
        
        padding: 10
    },
    inner:{
      flex: 1, 
      backgroundColor: 'white', 
      alignItems: 'center',
      justifyContent: "center",
      
    }
})