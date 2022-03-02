import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function CategoryBtn({label, ...rest}) {
  return (
    <>
    {/* rest allows me to access all props TouchableOpacity uses */}
      <TouchableOpacity {...rest}>
        <View style={styles.container}>
          <Text>{label}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}

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
  },
});
