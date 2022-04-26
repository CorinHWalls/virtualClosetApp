import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

export default function CategoryBtn({ label, ...rest }) {
  const {isPressed} = useContext(UserContext);
  const styles = StyleSheet.create({
    container: {
      height: 30,
      width: 90,
      marginLeft: 20,
      // borderWidth: 0.5,
      // borderColor: "black",
      backgroundColor: "#ffffff",
      justifyContent: "center",
      alignItems: "center",
      // marginHorizontal: 20,
      borderRadius: 15,
      // backgroundColor: isPressed ? "skyblue" : "white",
    },
    pressedContainer:{
      height: 30,
      width: 90,
      marginLeft: 20,
      // borderWidth: 0.5,
      // borderColor: "black",
      backgroundColor: "#ffffff",
      justifyContent: "center",
      alignItems: "center",
      // marginHorizontal: 20,
      borderRadius: 15,
      backgroundColor: "skyblue"
    }
  });

  return (
    <>
      {/* rest allows me to access all props TouchableOpacity uses */}
      <TouchableOpacity {...rest}>
        <View style={isPressed ? styles.pressedContainer : styles.container}>
          <Text>{label}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
  
}

