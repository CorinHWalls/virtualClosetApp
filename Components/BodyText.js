import {Text, StyleSheet } from 'react-native'
import React from 'react'

export default function BodyText({children}) {
  return (
  <Text style={styles.text}>
      {children}
  </Text>
  )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir",
        color: "white",
        paddingLeft: 10
}, 


})