import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Box, HStack, StatusBar, Icon, IconButton, Popover, Button } from "native-base";
import UserContext from "../../Context/UserContext";
import React, { useContext, useEffect, useState } from "react";
import { getItemById, updateItemById } from "../../Services/ItemService";
import { useNavigation } from "@react-navigation/native";

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
  const navigation = useNavigation();
  const [position, setPosition] = useState("auto")


  // const saveChanges = async () => {
  //   await updateItemById({currentUserId,
  //     selectedItemId,
  //     color,
  //     size,
  //     brand,
  //     season,
  //     category,
  //     image,
  //     favorite});
  // }
 
  const favoriteToggle = () => {
    if (!favorite) {
      
      setFavorite(true);
      
    } else {
    
      setFavorite(false);
      
      
    }
  

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
         <IconButton
         onPress={() => navigation.navigate("Dashboard")}
         />
        </HStack>
        

        {editStatus ? 
        <HStack ml="0">

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
                size="md"
                color="white"
                />
              }
              />
          {/* <Popover 
          placement={position === "auto" ? undefined : position}
          trigger={triggerProps => {
            return <IconButton
                {...triggerProps}
              icon={
                <Icon
                as={MaterialCommunityIcons}
                name="delete"
                size="md"
                color="white"
                />
              }
              />
          
          }}>
            <Popover.Content>
              <Popover.Arrow />
              <Popover.CloseButton />
              <Popover.Header>Delete Item?</Popover.Header>
              <Popover.Body>
                This will permanently delete the item currently selected. This action cannot be reversed.
              </Popover.Body>
              <Popover.Footer justifyContent="flex-end">
                <Button.Group space={2}>
                  <Button colorScheme="coolGray" variant="ghost">Cancel</Button>
                  <Button colorScheme="danger" onPress>Delete</Button>
                </Button.Group>
              </Popover.Footer>
            </Popover.Content>
            </Popover> */}
          {editStatus ? (
            <IconButton
            onPress={() => editToggle()}
            icon={
              <Icon
              as={MaterialCommunityIcons}
              name="check"
              size="md"
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
                  size="md"
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
