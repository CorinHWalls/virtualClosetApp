import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

export default function Category() {
  return (
    <>
      <Pressable>
        <View style={styles.container}>
          <Text>All</Text>
        </View>
      </Pressable>

      <Pressable>
        <View style={styles.container}>
          <Text>Shirt</Text>
        </View>
      </Pressable>

      <Pressable>
        <View style={styles.container}>
          <Text>Bottoms</Text>
        </View>
      </Pressable>
      
      <Pressable>
      <View style={styles.container}>
        <Text>Shoes</Text>
      </View>
      </Pressable>

      <Pressable>
      <View style={styles.container}>
        <Text>HeadWear</Text>
      </View>
      </Pressable>

      <Pressable>
      <View style={styles.container}>
        <Text>Dresses</Text>
      </View>
      </Pressable>

      <Pressable>
      <View style={styles.container}>
        <Text>Accessories</Text>
      </View>
      </Pressable>
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
