import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Box, HStack, StatusBar, Icon, IconButton } from "native-base";
import UserContext from "../../Context/UserContext";
import React, { useContext, useEffect, useState } from "react";
import { getItemById, updateItemById } from "../../Services/ItemService";
import { useNavigation } from "@react-navigation/native";

export default function MainBar({
    page,
    back
}) {
    
  return (
    <>
       <StatusBar bg="#9AD0EC" barStyle="light-content" />
      <Box safeAreaTop />
      <HStack
        bg="#9AD0EC"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        maxW="100%"
      >
        <HStack alignItems="center">
          <Text style={styles.text}>
            {page}
          </Text>
          {/* <IconButton
            onPress={() => editToggle()}
            icon={
              <Icon
              as={MaterialCommunityIcons}
              name="check"
              size="sm"
              color="white"
              />
            }
            /> */}
        
        </HStack>
        </HStack>
    </>
  )
}

const styles = StyleSheet.create({
    text:{
        fontSize:20,
        padding:10
    }
})