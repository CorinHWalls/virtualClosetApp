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
} from "native-base";
import UserContext from "../../Context/UserContext";
import React, { useContext, useEffect, useState } from "react";
import { getItemById, updateItemById } from "../../Services/ItemService";
import { useNavigation } from "@react-navigation/native";
import DeleteModal from  "../DeleteModal";

export default function AppBar({
  page,
  edit,
  save,
  editStatus,
  setEditStatus,
  favorite,
}) {
  const { currentUser, setFavorite, modalVisible, setModalVisible} = useContext(UserContext);
  const currentUserId = currentUser[0].id;
  const navigation = useNavigation();
  const [position, setPosition] = useState("auto");


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
          <IconButton
            onPress={() => navigation.navigate("Dashboard")}
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
          onPress={() => {setModalVisible(true)} }
            icon={
              <Icon
                as={MaterialCommunityIcons}
                name="delete"
                size="md"
                color="white"
              />
            }
          />
          <DeleteModal />
        
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

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    padding: 10,
    color: "white",
  },
});
