import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Box, HStack, StatusBar, Icon, IconButton } from "native-base";
import UserContext from "../../Context/UserContext";
import React, { useContext, useEffect, useState } from "react";
import { getItemById, updateItemById } from "../../Services/ItemService";

export default function AppBar({
  page,
  edit,
  save,
  editStatus,
  setEditStatus,
  favorite,
}) {
  const {
    currentUser,
    brand,
    setBrand,
    image,
    setImage,
    color,
    setColor,
    size,
    setSize,
    season,
    setSeason,
    category,
    setCategory,
    setFavorite,
    selectedItemId,
    selected,
    setSelected,
  } = useContext(UserContext);
  const currentUserId = currentUser[0].id;


  const saveChanges = async () => {
    await updateItemById({currentUserId,
      selectedItemId,
      color,
      size,
      brand,
      season,
      category,
      image,
      favorite});
  }
 
  const favoriteToggle = () => {
    if (!favorite) {
      
      setFavorite(true);
      console.log("set true")
    } else {
    
      setFavorite(false);
      console.log("set false")
      
    }
    // setTimeout(() => {save()}, 1000)

  };

  const editToggle = () => {
    if (!editStatus) {
      edit();
      setEditStatus(true);
    } else {
      save();
      edit();
      setEditStatus(false);
    }
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
        <HStack alignItems="center">
          <Text color="white" fontSize="9" fontWeight="bold">
            {page}
          </Text>
        </HStack>

        {editStatus ? 
        <HStack ml="230">

        {favorite ? (
            <IconButton
            onPress={() => favoriteToggle()}
            icon={
              <Icon
              as={MaterialCommunityIcons}
              name="heart"
              size="sm"
              color="white"
              />
            }
            />
            ) : (
              <IconButton
              onPress={() => favoriteToggle()}
              icon={
                <Icon
                  as={MaterialCommunityIcons}
                  name="heart-outline"
                  size="sm"
                  color="white"
                  />
                }
                />
                )}

          </HStack>
          : null}
        <HStack>
          
          <IconButton
            icon={
              <Icon
              as={MaterialCommunityIcons}
              name="delete"
              size="sm"
              color="white"
              />
            }
            />
          {editStatus ? (
            <IconButton
            onPress={() => editToggle()}
            icon={
              <Icon
              as={MaterialCommunityIcons}
              name="check"
              size="sm"
              color="white"
              />
            }
            />
          ) : (
            <IconButton
              onPress={() => editToggle()}
              icon={
                <Icon
                  as={MaterialCommunityIcons}
                  name="pencil"
                  size="sm"
                  color="white"
                />
              }
            />
          )}
        
        </HStack>

      </HStack>
    </>
  );
}
