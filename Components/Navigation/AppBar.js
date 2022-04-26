import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Box,
  HStack,
  StatusBar,
  Icon,
  IconButton,
  Popover,
  Button,
  AlertDialog,
} from "native-base";
import UserContext from "../../Context/UserContext";
import React, { useContext, useState, useRef } from "react";
import { RemoveItem } from "../../Services/ItemService";
import { useNavigation } from "@react-navigation/native";

export default function AppBar({
  page,
  edit,
  save,
  editStatus,
  setEditStatus,
  favorite,
  editIcon,
  deleteItem,
  deleteOutfit
}) {
  const {
    currentUser,
    selectedItemId,
    setSelectedItemId,
    brand,
    image,
    color,
    size,
    season,
    category,
    setFavorite,
    selected,
    setCounter,
    counter,
    setLoginPending
  } = useContext(UserContext);
  const currentUserId = currentUser[0].id;
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);

  const cancelRef = useRef(null);

  //Moving
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
      setCounter(counter+1)
    } else {
      save();
      setCounter(counter+1)
      edit();
      setEditStatus(false);
    }
  };

  const handleBackBtn = () => {
    setSelectedItemId(null)
    setCounter(counter+1)
    navigation.navigate("Dashboard")
  }

  const handleDelete = () => {
    RemoveItem(
      currentUserId,
      selectedItemId,
      favorite,
      color,
      brand,
      season,
      category,
      image,
      selected,
      size
    );
    setIsOpen(false);
    setLoginPending(true)
    setTimeout(() => {
      setLoginPending(false)
    }, 2000);
    setCounter(counter+1)
    setSelectedItemId(null)
    navigation.navigate('Dashboard');
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
          <IconButton
            onPress={() => handleBackBtn()}
            icon={
              <Icon
                as={MaterialCommunityIcons}
                name="arrow-left"
                size="md"
                color="white"
              />
            }
          />

          <Text style={styles.text}>{page}</Text>
        </HStack>

        {editStatus ? (
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
        ) : null}
        <HStack>
          <IconButton
            onPress={() => {
              setIsOpen(!isOpen);
            }}
            icon={
              <Icon
                as={MaterialCommunityIcons}
                name="delete"
                size="md"
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

      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Delete Item</AlertDialog.Header>
          <AlertDialog.Body>
            This will permenantly delete this item. This action cannot be
            undone.
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button
                variant="unstyled"
                colorScheme="coolGray"
                onPress={onClose}
                ref={cancelRef}
              >
                Cancel
              </Button>
              <Button colorScheme="danger" onPress={handleDelete}>
                Delete
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    padding: 10,
    color: "white",
  },
});
