import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity
} from "react-native";
import React from 'react'

export default function ProfileScreen() {
  return (
    <SafeAreaView>
      <Text>Profile Screen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "rgb(239, 218, 215)",
  }
})