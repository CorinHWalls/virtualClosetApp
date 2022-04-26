import { View, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Logo({url}) {
  return (
    <View style={styles.imageContainer}>
        <Image style={styles.image} source={url} />
       
      </View>
  )
}

const styles = StyleSheet.create({
 
    image: {
      width: 275,
      height: 160,
    },
    imageContainer: {
      width: "100%",
      height: "100%",
      alignItems: "center",
      position: "absolute",
      top: 100
    },
  
  });
  