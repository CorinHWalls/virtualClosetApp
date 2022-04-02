import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Box, HStack, StatusBar, Icon, IconButton, Alert } from "native-base";
import UserContext from "../../Context/UserContext";
import React, { useContext, useEffect, useState } from "react";
import { getItemById, updateItemById } from "../../Services/ItemService";
import { useNavigation } from "@react-navigation/native";
import { addOutfit } from "../../Services/OutfitService";

export default function MainBar({ page, selectedItems }) {
  const navigation = useNavigation();

  const handleSubmitOutfit = () => {
    selectedItems.forEach((item) => {
      if (selectedItems.length == 0) {
        Alert("Please select items to create an outfit.");
      } else {
        let itemId = item.id;
        item.id = 0;
        addOutfit({ ...item, outfitName: "Corin Outfit", itemId });
        console.log({ ...item, outfitName: "Corin Outfit", itemId });
        navigation.navigate("Dashboard");
      }
    });
  };

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
        <HStack alignItems="flex-start">
          {selectedItems ? 
          <IconButton
                icon={
                  <Icon
                    as={MaterialCommunityIcons}
                    name="arrow-left"
                    size="md"
                    color="white"
                  />
                }
                onPress={() => navigation.navigate("Dashboard")}
              />
              :  null
          
        }
          <Text style={styles.text}>{page}</Text>
        </HStack>
        {selectedItems ? (
          <>
            <IconButton
              onPress={() => handleSubmitOutfit()}
              icon={
                <Icon
                  as={MaterialCommunityIcons}
                  name="check"
                  size="sm"
                  color="white"
                />
              }
            />
          </>
        ) : null}
      </HStack>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    padding: 10,
    color: 'white',
  
  },
});
