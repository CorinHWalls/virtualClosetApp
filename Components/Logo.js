import { View, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Logo() {
  return (
    <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/logo.png")} />
       
      </View>
  )
}

const styles = StyleSheet.create({
 
    image: {
      width: 220,
      height: 120,
    },
    imageContainer: {
      width: "100%",
      height: "100%",
      alignItems: "center",
      position: "absolute",
      top: 100
    },
  
  });
  