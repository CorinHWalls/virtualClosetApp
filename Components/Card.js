import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import React from 'react'

export default function Card(title) {
  return (
      <>
    <View style={styles.cardContainer}>
     <View style={{alignItems: 'center', marginTop:37}}>
         {/* <Text>{{title}}</Text> */}
     </View>
    </View>
      </>
  )
}

const deviceWidth = Math.round(Dimensions.get('window').width)

const styles = StyleSheet.create({
    cardContainer: {
        width: deviceWidth - 25,
        backgroundColor: '#9AD0EC',
        height: 150,
        borderRadius: 20,

        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height:5
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 9,
        
    },
    imageStyle:{
     
    }
})
