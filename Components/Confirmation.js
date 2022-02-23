import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';


const Confirmation = () => {


  return (
      <>
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
     <LottieView source={require('../assets/confirmCheck.json')} autoPlay loop />
    <View>

     <Text style={styles.text}>Account Successfull Created</Text>
    </View>
    </View>
      </>
    
  )
}

const styles= StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'rgb(239,218,215)',
        zIndex: 1,
    },
    text: {
        marginTop: 300,
        fontSize: 22
       
    }
})

export default Confirmation