import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import React from "react";

import AppButton from "../Components/AppButton";
import Logo from "../Components/Logo";


export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/welcome1.jpg")}
    >
      {/* <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/logo.png")} />
        <View style={styles.titleContainer}>

        <Text>Your Closet In Your Pocket</Text>
        </View>
      </View> */}
      <Logo url={require("../assets/logo.png")} />

{/* 
      <View style={styles.titleContainer}>
      </View> */}

      <View style={styles.buttonsContainer}>
        <AppButton
          title="Login"
          color="primary"
          onPress={() => navigation.navigate("LoginScreen")}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate("RegisterScreen")}
        />
      </View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
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
  titleContainer: {
    paddingTop: 15,
    alignItems: "center",
   
  },
});
